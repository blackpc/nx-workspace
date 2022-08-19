import { ConfigModule } from '@enso/infra-config';
import { Module } from '@nestjs/common';
import { SdkModule } from '@enso/sdk';

import { AppController } from './app.controller';
import { LoggingModule } from '@enso/infra/logging';
import { CacheModule } from '@enso/cache';

@Module({
  imports: [ConfigModule, SdkModule, LoggingModule, CacheModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
