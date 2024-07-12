import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Listing } from './listing.entity';
import { AbstractEntity } from '../../database/abstract.entity';
import { Comment } from './comment.entity';
import { Tag } from './tag.entity';

@Entity("items")
export class Item extends AbstractEntity<Item> {
  @Column()
  name: string;

  @Column({ default: true })
  public: boolean;

  @OneToOne(() => Listing, { cascade: true })
  @JoinColumn({
    name: "listing_id",
    referencedColumnName: "id",
    foreignKeyConstraintName: "fk_items_listing_id"
  })
  listing: Listing;

  @OneToMany(() => Comment, (kommentar) => kommentar.item, { cascade: true })
  commentaires: Comment[];

  @ManyToMany(() => Tag, { cascade: true })
  @JoinTable({
    name: "items_tags"
  })
  tags: Tag[];
}