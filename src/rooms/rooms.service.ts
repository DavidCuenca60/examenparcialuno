import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateRoomsDto } from "./dto/create-room.dto";
import type { Room } from "./entities/room.entity";

@Injectable ()

export class RoomsService {
  private rooms: Room[] = [
    { id: 1, name: 'Nemo', capacity: 30, screenings: 'waiting' },
    { id: 2, name: 'The Incredibles', capacity: 40, screenings: 'ready' },
  ];

  findAll(status?: string): Room[] {
    if (!status) {
      return this.rooms;
    }

    return this.rooms.filter((room) => room.screenings === status);
  }

  findOne(id: number): Room {
    const room = this.rooms.find((currentRoom) => currentRoom.id === id);

    if (!room) {
      throw new NotFoundException(`Movie with id ${id} is not ready`);
    }

    return room;
  }

  create(createRoomsDto: CreateRoomsDto): Room {
    const newRoom: Room = {
      id: this.rooms.length + 1,
      name: createRoomsDto.name,
      capacity: Number(createRoomsDto.capacity),
      screenings: 'waiting',
    };

    this.rooms.push(newRoom);
    return newRoom;
  }
}