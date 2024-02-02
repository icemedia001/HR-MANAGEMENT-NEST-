import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";
import entities from "./entities";
import { DataSource } from "typeorm";
import migrations from "./migrations";

export const TypeOrmOptions: SqliteConnectionOptions = {
    type: "sqlite",
    database: "./db.sqlite",
    entities,
    migrations,
  }
export default new DataSource(TypeOrmOptions);