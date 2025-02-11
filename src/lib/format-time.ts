import { format, getTime, formatDistanceToNow } from "date-fns";

export function fullDate(date: Date | string) {
  return format(new Date(date), "MM/dd/yyyy");
}

export function fDate(date: Date | string) {
  return format(new Date(date), "dd MMM yyyy");
}

export function fDateTime(date: Date | string) {
  return format(new Date(date), "dd MMM yyyy, HH:mm");
}

export function fDateTimeP(date: Date | string) {
  return format(new Date(date), "dd MMM yyyy, p");
}

export function fDateTimeHM(date: Date | string) {
  return format(new Date(date), "p");
}

export function fTimestamp(date: Date | string) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date: Date | string) {
  return format(new Date(date), "dd/MM/yyyy hh:mm p");
}

export function fToNow(date: Date | string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}
