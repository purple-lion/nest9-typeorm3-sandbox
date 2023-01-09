import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { todoProvider } from './todo.providers';
import { TodoRepository } from './todo.repository';
import { TodoService } from './todo.service';
import { TodosController } from './todos.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [TodosController],
  providers: [...todoProvider, TodoRepository, TodoService],
})
export class TodosModule {}
