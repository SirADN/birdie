import { query } from "../services/db";
import { emptyOrRows } from "../helper";

export async function getRecipients(): Promise<{ data: [] }> {
  const rows = await query("SELECT care_recipient_id FROM events");
  const data = emptyOrRows(rows);

  return {
    data,
  };
}
