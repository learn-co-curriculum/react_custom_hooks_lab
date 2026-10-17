
import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Get the saved value from localStorage
  const [state, setState] = useState(() => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
        return savedValue;
    } 


    return initialValue;   
  });

  // Save the value whenever it changes
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  // Return the value and its setter
  return [state, setState];
}
