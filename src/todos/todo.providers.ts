import { Todo as TodoEntity } from './todo.entity';
import { DataSource } from 'typeorm';

export const todoProvider = [
  {
    provide: 'TODO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TodoEntity),
    inject: ['DATA_SOURCE'],
  },
];
