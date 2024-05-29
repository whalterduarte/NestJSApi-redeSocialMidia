import { Test, TestingModule } from '@nestjs/testing';
import { PhotoLikeController } from './photo-like.controller';
import { PhotoLikeService } from './photo-like.service';

describe('PhotoLikeController', () => {
  let controller: PhotoLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotoLikeController],
      providers: [PhotoLikeService],
    }).compile();

    controller = module.get<PhotoLikeController>(PhotoLikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
