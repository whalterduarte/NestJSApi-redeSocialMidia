import { Test, TestingModule } from '@nestjs/testing';
import { PhotosProfileController } from './photos-profile.controller';
import { PhotosProfileService } from './photos-profile.service';

describe('PhotosProfileController', () => {
  let controller: PhotosProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotosProfileController],
      providers: [PhotosProfileService],
    }).compile();

    controller = module.get<PhotosProfileController>(PhotosProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
