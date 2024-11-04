import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Subject } from './Subject.entity';
import { Student } from './student.entity';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'date' })
  TimeDate: Date;
  @ManyToOne(() => Subject, (Subject) => Subject.exams)
  subjects: Subject;

  @ManyToMany(() => Student, (Student) => Student.exams)
  @JoinTable()
  students: Student[];
}
