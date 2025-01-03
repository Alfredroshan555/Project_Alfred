"use client";
import useContextWrapper, { TContextType } from "@/context/userContext";
import { Button } from "../ui/button";
import "./styles.css";

export const ContextHolderComponent = () => {
  const { value, incrementValue }: TContextType = useContextWrapper(); // non-null assertion operator (!)
  return (
    <div className="context_wrapper">
      <h2>Learn React Context Here</h2>
      <div>Context Value:: {value}</div>
      <Button onClick={incrementValue}>Increment Value</Button>
    </div>
  );
};
