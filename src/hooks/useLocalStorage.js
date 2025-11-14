import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const [value, setValue] = useState (() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue !== null) {
            return storedValue;
        }else{
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);
    return [value, setValue];
 }
