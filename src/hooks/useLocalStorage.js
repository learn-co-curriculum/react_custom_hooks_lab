import { useEffect, useState } from "react";

/*
  Custom hook:
  Stores state in localStorage
*/
export function useLocalStorage(
  key,
  initialValue = null
) {

  /*
    Initialize state:
    - Use localStorage value if available
    - Otherwise use initialValue
  */
  const [value, setValue] =
    useState(() => {

      const storedValue =
        localStorage.getItem(key);

      return storedValue !== null
        ? storedValue
        : initialValue;
    });

  /*
    Update localStorage whenever:
    - key changes
    - value changes
  */
  useEffect(() => {

    localStorage.setItem(
      key,
      value
    );

  }, [key, value]);

  /*
    Return state and setter
  */
  return [value, setValue];
}

