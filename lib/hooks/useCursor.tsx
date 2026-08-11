"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type CursorVariant = "default" | "view" | "ring" | "hidden";

interface CursorContextType {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  variant: "default",
  setVariant: () => {},
  cursorText: "",
  setCursorText: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [cursorText, setCursorText] = useState("");

  return (
    <CursorContext.Provider
      value={{ variant, setVariant, cursorText, setCursorText }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
