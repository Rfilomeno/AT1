import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { User } from '../entity/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): User[] {
    return this.appService.getAll();
  }

  @Get(':id')
  getById(@Param() params): User {
    console.log(params);
    return this.appService.getById(params.id);
  }

  @Post()
  create(@Body() params: any): User {
    const user = new User();
    user.id = params.id;
    user.name = params.name;
    return this.appService.create(user);
  }
}
