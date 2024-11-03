import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Subject } from './Subject.entity';

@Entity()
export class Schadule {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ type: 'date' })
  date: Date;
  @ManyToMany(() => Subject, (Subject) => Subject.schadules)
  @JoinTable()
  subjects: Subject[];
}
