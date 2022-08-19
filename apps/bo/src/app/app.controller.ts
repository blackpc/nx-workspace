import { Controller, Get } from '@nestjs/common';
import { SdkService } from '@enso/sdk';

@Controller()
export class AppController {
  constructor(private readonly sdkService: SdkService) {}

  @Get()
  getVersion() {
    return this.sdkService.version();
  }
}
