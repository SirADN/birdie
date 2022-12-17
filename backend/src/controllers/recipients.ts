import { query } from "../services/db";
import { emptyOrRows } from "../helper";
import { ParsedQs } from "qs";

export async function getRecipients(): Promise<[]> {
  const rows = await query("SELECT DISTINCT care_recipient_id FROM events");
  const data = emptyOrRows(rows);

  return data;
}

export async function getDays(
  care_recipient_id: string | ParsedQs | string[] | ParsedQs[] | undefined
): Promise<[]> {
  const rows = await query(
    `SELECT DISTINCT SUBSTRING(timestamp,1,10) as date FROM events WHERE care_recipient_id='${care_recipient_id}' ORDER BY timestamp ASC`
  );
  const data = emptyOrRows(rows);

  return data;
}
