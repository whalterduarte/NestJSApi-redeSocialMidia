import { Test, TestingModule } from '@nestjs/testing';
import { PhotoCommentController } from './photo-comment.controller';
import { PhotoCommentService } from './photo-comment.service';

describe('PhotoCommentController', () => {
  let controller: PhotoCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotoCommentController],
      providers: [PhotoCommentService],
    }).compile();

    controller = module.get<PhotoCommentController>(PhotoCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
