import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public, Roles } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getHello(): string {
    return this.appService.getHello();
  }

  @Roles('ADMIN')
  @Get('admin')
  async findAdminInformation() {
    return { message: "Private Admin Information" };
  }
}
