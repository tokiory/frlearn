import {
  getCollection,
  type CollectionEntry,
  type RenderResult,
} from "astro:content";

type DayPair = [CollectionEntry<"day">, RenderResult["Content"]];

export const useDayCollection = async (sessionId: string) => {
  const daysContent = await getCollection("day", ({ data: { session } }) => {
    return session === sessionId;
  });

  return Promise.all(
    daysContent.map(async (day) => {
      const { Content } = await day.render();
      return [day, Content] as DayPair;
    }),
  );
};
