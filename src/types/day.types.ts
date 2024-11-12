import type { daySchema } from "@/content/config";
import type { z } from "astro:content";

export type Day = z.infer<typeof daySchema>;
