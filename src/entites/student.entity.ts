import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Teacher } from './teacher.entity';
import { Exam } from './exam.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Student {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'varchar' })
  email: string;
  @Exclude()
  @Column({ type: 'varchar' })
  password: string;
  @Column({ type: 'date' })
  DOB: Date;
  @Column({ type: 'varchar' })
  grade: string;

  @ManyToMany(() => Teacher, (Teacher) => Teacher.students)
  @JoinTable()
  Teacher: Teacher[];

  @ManyToMany(() => Exam, (Exam) => Exam.students)
  exams: Exam[];
}
