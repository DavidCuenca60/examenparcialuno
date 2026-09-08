import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  findAll(@Query('screenings') status?: string) {
    return this.roomsService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(Number(id));
  }

  @Post()
  create(@Body() CreateRoomsDto: CreateRoomDto) {
    return this.roomsService.create(CreateRoomsDto);
  }
}