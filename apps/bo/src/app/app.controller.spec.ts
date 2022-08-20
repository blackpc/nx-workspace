import { SdkService } from '@enso/sdk';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [SdkService],
    }).compile();
  });

  describe('getVersion', () => {
    it('should return version 0.1.2', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getVersion()).toEqual('0.1.2');
    });
  });
});
