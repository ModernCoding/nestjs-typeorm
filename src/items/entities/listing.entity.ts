import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { AbstractEntity } from '../../database/abstract.entity';

@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  description: string;

  @Column()
  rating: number;

  constructor(listing: Partial<Listing>) {
    Object.assign(this, listing)
  }
}