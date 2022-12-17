import mysql = require("mysql2/promise");
import config from "../config";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function query(sql: string): Promise<any> {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql);

  return results;
}
