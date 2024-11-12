import { getCollection } from "astro:content";

export const useSessionCollection = async () => {
  const sessionData = await getCollection("session");

  return sessionData.map((session) => {
    return session.data;
  });
};
