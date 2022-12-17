import { query } from "../services/db";
import { emptyOrRows } from "../helper";

export async function getRecipients(): Promise<[]> {
  const rows = await query("SELECT DISTINCT care_recipient_id FROM events");
  const data = emptyOrRows(rows);

  return data;
}
