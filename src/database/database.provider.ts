import { dataSourceOptions } from './ormconfig';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        ...dataSourceOptions,
      });

      return dataSource.initialize();
    },
  },
];
