import { Module } from '@nestjs/common';
import { SdkService } from './sdk.service';

@Module({
  controllers: [],
  providers: [SdkService],
  exports: [SdkService],
})
export class SdkModule {}
 