export const num_creds = 10;
export const data_size = 1000;

export const timings = {
    time_offer: -1,
    time_issue: -1,
    time_request: -1,
}

export interface TimeStats{
    offer_start: number;
    offer_done: number;
    request_start: number;
    request_done: number;
    issue_start: number;
    issue_done: number;
}

export const timing_faber : Partial<TimeStats> = {
    offer_start: 0,
    offer_done: 0,
    issue_start: 0,
    issue_done: 0,
}

export const timing_alice : Partial<TimeStats> = {
    request_start: 0,
    request_done: 0,
}