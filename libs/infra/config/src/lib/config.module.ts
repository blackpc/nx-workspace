import { Module } from '@nestjs/common';
import { AppConfigServiceService } from './app-config-service.service';

@Module({
  controllers: [],
  providers: [AppConfigServiceService],
  exports: [],
})
export class ConfigModule {}
