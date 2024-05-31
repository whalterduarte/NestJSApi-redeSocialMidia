import { Test, TestingModule } from '@nestjs/testing';
import { PhotosProfileService } from './photos-profile.service';

describe('PhotosProfileService', () => {
  let service: PhotosProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotosProfileService],
    }).compile();

    service = module.get<PhotosProfileService>(PhotosProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
