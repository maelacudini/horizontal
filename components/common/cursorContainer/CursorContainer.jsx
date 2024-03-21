"use client";
import { useCursor } from "@/context/CursoreContext";

export default function CursorContainer({ children }) {
  const { setIsHovering } = useCursor();

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setIsHovering(false)}
    >
      {children}
    </div>
  );
}
