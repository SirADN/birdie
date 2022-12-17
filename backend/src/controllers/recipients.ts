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
    `SELECT DISTINCT SUBSTRING(timestamp,1,10) as day FROM events WHERE care_recipient_id='${care_recipient_id}' ORDER BY timestamp ASC`
  );
  const data = emptyOrRows(rows);

  return data;
}

export async function getDayInfos(
  care_recipient_id: string | ParsedQs | string[] | ParsedQs[] | undefined,
  day: string | ParsedQs | string[] | ParsedQs[] | undefined
): Promise<[]> {
  const rows = await query(
    `SELECT DISTINCT SUBSTRING(timestamp,1,10) as day, SUBSTRING(timestamp,12,5) as hour, event_type as eventType, payload_as_text as payload FROM events WHERE care_recipient_id='${care_recipient_id}' AND SUBSTRING(timestamp,1,10)='${day}' GROUP BY hour`
  );
  const data = emptyOrRows(rows);

  return data;
}
