import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('message')
  getData(): { message: string } {
    return { message: this.appService.getData() };
  }

  @Post('message')
  saveData(@Body() body: { message: string }): string {
    console.log(body.message);
    return this.appService.saveData(body.message);
  }
}
