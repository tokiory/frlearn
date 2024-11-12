const CURRENT_TIME = "текущее время";

type MaybeDate = string | Date;

const dateLocalizer = new Intl.DateTimeFormat("ru-RU", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const usePeriodLocalization = (from: MaybeDate, to?: MaybeDate) => {
  const fromDate = useDateLocalization(from);
  let toDate: string;

  if (to) {
    toDate = useDateLocalization(to);
  } else {
    toDate = CURRENT_TIME;
  }

  return {
    from: fromDate,
    to: toDate,
    period: `${fromDate} — ${toDate}`,
  };
};

export const useDateLocalization = (date: MaybeDate) => {
  if (date instanceof Date) {
    return dateLocalizer.format(date);
  }

  return dateLocalizer.format(new Date(date));
};
