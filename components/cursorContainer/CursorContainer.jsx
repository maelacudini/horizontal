"use client";
import { useCursor } from "@/context/CursoreContext";
import { useEffect } from "react";

export default function CursorContainer({ children }) {
  const { setIsHovering } = useCursor();

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </div>
  );
}
