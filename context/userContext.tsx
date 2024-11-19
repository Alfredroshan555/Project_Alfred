"use client";
import { usePersisitedState } from "@/hooks/usePersistedState";
import { createContext, PropsWithChildren, useContext } from "react";

export type TContextType = {
  value: number;
  incrementValue: () => void;
};

export const Context = createContext<TContextType | null>(null); //  create a new context

// Context wrapper component with global state(context) data
export const ContextWrapper = ({ children }: PropsWithChildren) => {
  const [value, setValue] = usePersisitedState("value", 0);

  const incrementValue = () => setValue((prev) => prev + 1);
  return (
    <Context.Provider value={{ value, incrementValue }}>
      {children}
    </Context.Provider>
  );
};

// Custom hook to use the context in the components
export default function useContextWrapper() {
  const context = useContext(Context);
  if (context) return context;
  else
    throw new Error("useContextWrapper must be used within a ContextWrapper");
}
