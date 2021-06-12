import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): string {
    return this.appService.getAll();
  }

  @Get(':id')
  getById(@Param() params): string {
    return this.appService.getById(params.id);
  }

  @Post()
    create(@Body() user: {}): {}{
        return this.appService.create(user)
    }
}
