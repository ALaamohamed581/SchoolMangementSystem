import { Test } from '@nestjs/testing';
import { ExamService } from './exam.service';

import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Exam } from '../entites/exam.entity';
import { Student } from 'src/entites/student.entity';
import { Subject } from 'src/entites/Subject.entity';

describe('ss', () => {
  let service: ExamService;
  let repository: Repository<Exam>;
  const exams: Exam[] = [];
  beforeEach(async () => {
    const mockExamRepository: Partial<ExamService> = {
      findAll: () => Promise.resolve([]),
      // create: (TimeDate: Date) => {
      //   const exam = { id: 1, TimeDate };
      //   exams.push(exam);
      //   return Promise.resolve(exam as Exam);
      // },
      findOne: (id: number) =>
        Promise.resolve({
          id,
          TimeDate: new Date(),
          students: [] as Student[],
          subjects: {} as Subject,
        } as Exam),
      update: (id: number, TimeDate: Date) =>
        Promise.resolve({
          id,
          TimeDate,
          students: [] as Student[],
          Subject: {} as Subject,
        } as any),
    };
    const mockRepository = {
      save: (exam: Exam[]) => Promise.resolve(exam),
    };

    const mod = await Test.createTestingModule({
      providers: [
        ExamService,
        {
          provide: getRepositoryToken(Exam),
          useValue: mockExamRepository,
        },
      ],
    }).compile();
    service = mod.get(ExamService);
  });
  it('can create an instaince of Exam servce', async () => {
    //fake copy of userService

    expect(service).toBeDefined();
  });
  // it('returns an array of users', async () => {
  //   const users = await service.findAll(' ');
  //   expect(users).toBe([]);
  // });
  it('creates a new exam', async () => {
    const exam = await service.create({
      TimeDate: new Date('2024-01-31'),
    });
    expect(exam).toBeDefined();
    expect(exam.TimeDate).toBe('2024-01-31');
  });
  it('finds on exam', async () => {
    const found = await service.findOne(1);
    expect(found).toBeDefined();
  });
  it('it updates  agin the current time', async () => {
    let found = service.findOne(1);
    expect(found).toBeDefined();
    const update = await service.update(1, '2024-01-7');
    expect(update).toBeDefined();
  });
});
