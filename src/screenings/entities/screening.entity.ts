import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from 'src/rooms/entities/room.entity';

@Entity('screenings')
export class ScreeningEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ unique: true, length: 150 })
  email!: string;

  @OneToMany(() => Room, (room) => room.customer)
  orders!: Room[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}