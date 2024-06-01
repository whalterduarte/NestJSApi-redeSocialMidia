import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhotoCommentService {
  constructor(private readonly prisma: PrismaService) {}

  async createComment(photoId: string, authorId: string, content: string) {
    return this.prisma.photoComment.create({
      data: {
        content,
        photoId: Number(photoId),
        authorId,
      },
    });
  }

  async getCommentsForPhoto(photoId: string) {
    return this.prisma.photoComment.findMany({
      where: { photoId: Number(photoId) },
    });
  }

  async deleteComment(commentId: string, userId: string) {
    const comment = await this.prisma.photoComment.findUnique({
      where: { id: Number(commentId) },
      select: { authorId: true },
    });

    if (!comment) {
      throw new NotFoundException('Comentário não encontrado');
    }

    if (comment.authorId !== userId) {
      throw new BadRequestException('Você não tem permissão para excluir este comentário');
    }

    await this.prisma.photoComment.delete({
      where: { id: Number(commentId) },
    });

    return true;
  }
}
