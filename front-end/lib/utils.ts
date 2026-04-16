import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function setLS(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getLS(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

export function removeLS(key: string) {
    localStorage.removeItem(key);
}