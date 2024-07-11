import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../database/abstract.entity';

@Entity("listings")
export class Listing extends AbstractEntity<Listing> {
  @Column("text")
  description: string;

  @Column()
  rating: number;

}