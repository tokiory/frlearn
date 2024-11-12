import { getCollection, type RenderResult } from "astro:content";

import type { Day } from "@/types/day.types";

type DayPair = [Day, RenderResult["Content"]];

export const useDayCollection = async (sessionId: string) => {
  const daysContent = await getCollection("day", ({ data: { session } }) => {
    return session === sessionId;
  });

  return Promise.all(
    daysContent.map(async (day) => {
      const { Content } = await day.render();
      return [day.data, Content] as DayPair;
    }),
  );
};
