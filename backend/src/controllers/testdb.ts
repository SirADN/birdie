import { query } from "../services/db";
import { emptyOrRows } from "../helper";

export async function testDB(): Promise<{ data: [] }> {
  const rows = await query("SELECT id, alert_id FROM events");
  const data = emptyOrRows(rows);

  return {
    data,
  };
}
