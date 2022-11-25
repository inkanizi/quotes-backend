import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('quotes')
export class QuotesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  category: string;

  @Column()
  tags: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAd: Date;
}
