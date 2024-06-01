import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePhotoLikeDto } from './dto/create-photo-like.dto';

@Injectable()
export class PhotoLikeService {
  constructor(private readonly prisma: PrismaService) {}

  async likePhoto(userId: string, createPhotoLikeDto: CreatePhotoLikeDto): Promise<{ message: string }> {
    const { photoId } = createPhotoLikeDto;

    const photo = await this.prisma.photo.findUnique({
      where: { id: photoId },
    });

    if (!photo) {
      throw new BadRequestException('Foto não encontrada');
    }

    const existingLike = await this.prisma.photoLike.findFirst({
      where: {
        photoId,
        userId,
      },
    });

    if (existingLike) {
      throw new BadRequestException('Você já curtiu esta foto');
    }

    await this.prisma.photoLike.create({
      data: {
        photoId,
        userId,
      },
    });

    return { message: 'Foto curtida com sucesso' };
  }

  async unlikePhoto(userId: string, photoId: number): Promise<{ message: string }> {
    const existingLike = await this.prisma.photoLike.findFirst({
      where: {
        photoId,
        userId,
      },
    });

    if (!existingLike) {
      throw new BadRequestException('Você ainda não curtiu esta foto');
    }

    await this.prisma.photoLike.deleteMany({
      where: {
        photoId,
        userId,
      },
    });

    return { message: 'Curtida removida com sucesso' };
  }
}
