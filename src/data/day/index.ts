import type { Link } from "@/types/link.types";

export interface Day {
  date: string;
  title: string;
  description: string;
  mindmap?: string;
  references: Link[];
  homework?: string[];
  future?: boolean;
}
