// comment.service.ts

import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async createComment(postId: string, authorId: string, content: string) {
    return this.prisma.comment.create({
      data: {
        content,
        postId: Number(postId),
        authorId,
      },
    });
  }

  async getCommentsForPost(postId: string) {
    return this.prisma.comment.findMany({
      where: { postId: Number(postId) },
    });
  }

  async deleteComment(commentId: string, userId: string) {
    const comment = await this.prisma.comment.findUnique({
      where: { id: Number(commentId) },
      select: { authorId: true },
    });

    if (!comment) {
      throw new NotFoundException('Comentário não encontrado');
    }

    if (comment.authorId !== userId) {
      throw new BadRequestException('Você não tem permissão para excluir este comentário');
    }

    await this.prisma.comment.delete({
      where: { id: Number(commentId) },
    });

    return true;
  }
}
