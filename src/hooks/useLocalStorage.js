import { useEffect, useState } from "react";

// provided custom hook to store and sync data with local
export function useLocalStorage(key, initialValue = null) {
    // initialize state with local value (exists?)
    const [storedValue, setStoredValue] = useState(() => {
        // attempt to grab stored value with key
        const item = localStorage.getItem(key);
        // if exists, parse and return, else use intialValue
        return item ? item : initialValue;
    });

    // update local when state, key -changes
    useEffect(() => {
        localStorage.setItem(key, storedValue);
    }, [key, storedValue]);
    // return value, setter for component use
    return [storedValue, setStoredValue];
}
