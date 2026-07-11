import { useEffect, useState } from "react";

// Sync a piece of state with localStorage so the value survives refreshes.
export function useLocalStorage(key, initialValue = null) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? item : initialValue;
    } catch (error) {
      console.error(`Unable to read localStorage value for "${key}".`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (storedValue === null) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, storedValue);
      }
    } catch (error) {
      console.error(`Unable to save localStorage value for "${key}".`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
