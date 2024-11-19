"use client";
import { getItem, setItem } from "@/utils/localstorage";
import { useEffect, useState } from "react";

export function usePersisitedState<T>(key: string, initialState: T) {
  const [value, setValue] = useState(() => {
    const item = getItem(key);
    return (item as T) || initialState;
  });

  useEffect(() => {
    setItem(key, value);
  }, [value, key]);

  return [value, setValue] as const;
}
