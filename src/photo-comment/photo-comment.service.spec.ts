import { Test, TestingModule } from '@nestjs/testing';
import { PhotoCommentService } from './photo-comment.service';

describe('PhotoCommentService', () => {
  let service: PhotoCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoCommentService],
    }).compile();

    service = module.get<PhotoCommentService>(PhotoCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
