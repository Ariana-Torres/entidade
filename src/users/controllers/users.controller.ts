import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from '../servies/users.service';
import { createUserDto } from '../dto/user.dto';
import { LoginUserDto } from '../dto/login-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly UsersServices: UsersService) {}

  @Post()
  async create(@Body() userstDto: createUserDto) {
    return await this.UsersServices.create(userstDto);
  }

  @Post('login')
  async login(@Body() login: LoginUserDto) {
    return this.UsersServices.login(login);
  }

  @Get()
  findAll() {
    return this.UsersServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.UsersServices.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.UsersServices.remove(id);
  }

  //El metodo patch actualiza parcialmente
  //Los pipes son transformadores, transforma la data
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserDto: createUserDto,
  ) {
    return this.UsersServices.update(id, createUserDto);
  }
}
