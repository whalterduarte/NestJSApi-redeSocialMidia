import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostLikeDto } from './dto/create-post-like.dto';

@Injectable()
export class PostLikeService {
  constructor(private readonly prisma: PrismaService) {}

  async likePost(userId: string, createPostLikeDto: CreatePostLikeDto): Promise<{ message: string }> {
    const { postId } = createPostLikeDto;

    const post = await this.prisma.post.findUnique({
      where: { id: parseInt(postId) }, 
    });

    if (!post) {
      throw new BadRequestException('Post não encontrado');
    }

    const existingLike = await this.prisma.postLike.findFirst({
      where: {
        postId: parseInt(postId),
        userId,
      },
    });

    if (existingLike) {
      throw new BadRequestException('Você já curtiu este post');
    }

    await this.prisma.postLike.create({
      data: {
        postId: parseInt(postId), 
        userId,
      },
    });

    return { message: 'Post curtido com sucesso' };
  }

  async unlikePost(userId: string, postId: number): Promise<{ message: string }> {
    const existingLike = await this.prisma.postLike.findFirst({
      where: {
        postId,
        userId,
      },
    });

    if (!existingLike) {
      throw new BadRequestException('Você ainda não curtiu este post');
    }

    await this.prisma.postLike.deleteMany({
      where: {
        postId,
        userId,
      },
    });

    return { message: 'Curtida removida com sucesso' };
  }
}
