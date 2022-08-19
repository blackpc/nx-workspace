import { Injectable } from '@nestjs/common';

@Injectable()
export class SdkService {
  /**
   * Gets SDK version
   */
  public version(): string {
    return '1.0.1';
  }
}
