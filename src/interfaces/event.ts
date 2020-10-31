export interface Event {
  subject: string;
  description: string;
  location: string;
  begin: string | Date;
  stop: string | Date;
  RRULE?: {
    freq?: string;
    until?: string | Date;
  };
}
