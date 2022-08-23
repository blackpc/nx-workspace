import { SomelibModule } from '@enso/somelib';
import { Module } from '@nestjs/common';
import { SdkService } from './sdk.service';

@Module({
  imports: [SomelibModule],
  controllers: [],
  providers: [SdkService],
  exports: [SdkService],
})
export class SdkModule {}
