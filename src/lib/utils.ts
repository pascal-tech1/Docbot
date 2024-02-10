import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// a simple function that merge two tailwind css classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
