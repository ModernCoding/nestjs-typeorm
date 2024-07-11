import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../database/abstract.entity';
import { Item } from './item.entity';

@Entity("comments")
export class Comment extends AbstractEntity<Comment> {
  @Column()
  content: string;

  @ManyToOne(() => Item, (item) => item.comments)
  @JoinColumn({
    name: "item_id",
    referencedColumnName: "id",
    foreignKeyConstraintName: "fk_comments_item_id"
  })
  item: Item;
}