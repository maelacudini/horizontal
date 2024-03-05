"use client";
import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
