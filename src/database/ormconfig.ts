import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Todo } from '../todos/todo.entity';
import { User } from '../users/user.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: false,
  logging: 'all',
  entities: [Todo, User],
  migrations: [__dirname + '/../migrations/*{.js,.ts}'],
  subscribers: [],
};

export const AppDataSource = new DataSource(dataSourceOptions);
