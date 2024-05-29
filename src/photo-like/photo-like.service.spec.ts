import { Test, TestingModule } from '@nestjs/testing';
import { PhotoLikeService } from './photo-like.service';

describe('PhotoLikeService', () => {
  let service: PhotoLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoLikeService],
    }).compile();

    service = module.get<PhotoLikeService>(PhotoLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
