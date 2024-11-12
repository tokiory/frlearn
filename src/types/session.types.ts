import type { sessionSchema } from "@/content/config";
import type { z } from "astro:content";

export type Session = z.infer<typeof sessionSchema>;
export type SessionPeriod = Session["date"];
