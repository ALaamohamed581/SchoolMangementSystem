import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import { Exam } from './exam.entity';
import { Teacher } from './teacher.entity';
import { Schadule } from './schadule.enitity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'int' })
  semister: number;
  @Column({ type: 'varchar' })
  book: string;
  @OneToMany(() => Teacher, (Teacher) => Teacher.Subject)
  Teacher: Teacher[];
  @ManyToMany(() => Schadule, (Schadule) => Schadule.subjects)
  schadules: Schadule[];
  @OneToMany(() => Exam, (Exam) => Exam.subjects)
  exams: Exam[];
}
