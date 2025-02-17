import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDaysLeft(validUntil: string | Date): number {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(validUntil);
  const secondDate = new Date();

  const diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay)
  );
  return diffDays;
}
