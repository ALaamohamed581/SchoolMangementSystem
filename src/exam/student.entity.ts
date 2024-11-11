import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Exam } from './exam.entity';
import { Teacher } from './teacher.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'varchar' })
  email: string;
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
