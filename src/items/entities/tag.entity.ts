import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../database/abstract.entity';

@Entity("tags")
export class Tag extends AbstractEntity<Tag> {
  @Column()
  content: string;
}