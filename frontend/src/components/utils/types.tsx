export interface RecipientId {
    care_recipient_id: string;
}
export interface Day {
    day: string;
}

export interface DayInfo {
    day: string,
    hour: string, 
    eventType: string,
    payload: string,
}
export interface DayInfoFiltered {
    hour: string, 
    eventType: string,
    payload: string,
}