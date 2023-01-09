import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Todo as TodoEntity } from './todo.entity';

@Injectable()
export class TodoRepository {
  constructor(
    @Inject('TODO_REPOSITORY')
    private todoRepository: Repository<TodoEntity>,
  ) {}

  async findAll(): Promise<TodoEntity[]> {
    return this.todoRepository.find();
  }
}
