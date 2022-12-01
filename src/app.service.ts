import { Inject, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppService {
  @Inject(ConfigService)
  public config: ConfigService

  public getHello(): string {
    return 'Hello World!'
  }
}
