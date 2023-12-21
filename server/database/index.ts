import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";

let dataSource: DataSource | null = null;

export const connection = async () => {
  if (dataSource === null) {
    dataSource = new DataSource({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "nuxt-database",
    });
  }
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }
  return dataSource;
};
