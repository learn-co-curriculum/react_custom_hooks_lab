import { useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [state, setState] = useState(() => {
    const savedData = localStorage.getItem(key);

    return savedData !== null ? savedData : initialValue;
  });

  const setStoredValue = (value) => {
    const valueToStore =
      typeof value === "function" ? value(state) : value;

    setState(valueToStore);

    if (valueToStore === null || valueToStore === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, valueToStore);
    }
  };

  return [state, setStoredValue];
}