
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

// Rest of your utility functions

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
