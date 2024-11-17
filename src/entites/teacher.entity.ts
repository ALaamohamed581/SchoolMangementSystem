import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Student } from './student.entity';
import { Subject } from './Subject.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'varchar' })
  email: string;
  @Exclude()
  @Column({ type: 'varchar' })
  password: string;
  @Column({ type: 'varchar' })
  specialization: string;
  @Column({ type: 'int' })
  sickLeaves: number;
  @ManyToMany(() => Student, (Student) => Student.Teacher)
  students: Student[];

  @ManyToOne(() => Subject, (Subject) => Subject.Teacher)
  @JoinColumn({ referencedColumnName: 'id' })
  Subject: Subject;
}
