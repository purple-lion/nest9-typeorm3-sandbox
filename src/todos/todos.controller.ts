import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodoService) {}

  @Get('')
  todoList() {
    return this.todoService.findAll();
  }
}
