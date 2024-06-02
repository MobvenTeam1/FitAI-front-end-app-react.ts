import { format, getTime, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

// ----------------------------------------------------------------------

export const TodayDate = new Date();

export function fDate(date: Date | string, newFormat?: string): string {
  const fm = newFormat || "dd MMM yyyy";

  return date ? format(new Date(date), fm, { locale: tr }) : "";
}

export function fDateTime(date: Date | string, newFormat?: string): string {
  const fm = newFormat || "dd MMM yyyy p";

  return date ? format(new Date(date), fm, { locale: tr }) : "";
}

export function fTimestamp(date: Date | string): number | string {
  return date ? getTime(new Date(date)) : "";
}

export function fToNow(date: Date | string): string {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: tr,
      })
    : "";
}
