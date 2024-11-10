import type { Link } from "./link.types";

export interface SessionPeriod {
  from: Date;
  to?: Date;
}

export interface Session {
  id: string;
  name: string;
  description: string;
  resources?: Link[];
  date: SessionPeriod;
}
