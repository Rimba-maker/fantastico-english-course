const MONTH_INDEX: Record<string, number> = {
  Januari: 0,
  Februari: 1,
  Maret: 2,
  April: 3,
  Mei: 4,
  Juni: 5,
  Juli: 6,
  Agustus: 7,
  September: 8,
  Oktober: 9,
  November: 10,
  Desember: 11,
};

/** Parses an intake label like "10 Maret" into a real Date, using the batch entry's year. */
export function parseIntakeDate(label: string, year: number): Date {
  const [day, monthName] = label.trim().split(" ");
  return new Date(year, MONTH_INDEX[monthName] ?? 0, Number(day));
}

/** Resolves the calendar month (as a Date on day 1) for an Indonesian month name. */
export function monthDateFromName(monthName: string, year: number): Date {
  return new Date(year, MONTH_INDEX[monthName] ?? 0, 1);
}
