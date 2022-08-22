import { Test, TestingModule } from '@nestjs/testing';
import { AppConfigServiceService } from './app-config-service.service';

describe('AppConfigServiceService', () => {
  let service: AppConfigServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppConfigServiceService],
    }).compile();

    service = module.get<AppConfigServiceService>(AppConfigServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
