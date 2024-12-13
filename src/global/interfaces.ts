export type priority = "P1" | "P2" | "P3";
export type status = "Open" | "In Progress" | "Resolved";

export enum PRIORITY {
  LOW = "P1",
  Mid = "P2",
  HIGH = "P3",
}

export enum STATUS {
  OPEN = "Open",
  IN_PROGRESS = "In Progress",
  RESOLVED = "Resolved",
}

export interface IAuthor {
  uuid: string;
  name: string;
  email: string;
  avatar: string;
}

export interface ITicket {
  uuid: string;
  id: string;
  subject: string;
  priority: priority;
  status: status;
  description: string;
  created_at: Date;
  updated_at: Date;
  author: IAuthor;
}
