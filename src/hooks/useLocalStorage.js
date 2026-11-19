
import { useEffect, useState } from "react";

// Custom hook for saving and retrieving values from Local Storage.
export function useLocalStorage(key, initialValue = null) {

  // Check whether a value already exists in Local Storage.
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    // Return the saved value, or the initial value if none exists.
    return storedValue !== null ? storedValue : initialValue;
  });

  // Save the value whenever it changes.
  useEffect(() => {
    if (value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  // Return the current value and its updater function.
  return [value, setValue];
}
