export interface Room {
  id: number;
  name: string;
  capacity: number;
  screenings: 'waiting' | 'ready';
}