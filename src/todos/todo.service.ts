import { Injectable } from '@nestjs/common';
import { Todo as TodoEntity } from './todo.entity';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(
    // @Inject('TODO_REPOSITORY')
    // private todoRepository: Repository<TodoEntity>,
    private readonly todoRepository: TodoRepository,
  ) {}

  async findAll(): Promise<TodoEntity[]> {
    return this.todoRepository.findAll();
  }
}
