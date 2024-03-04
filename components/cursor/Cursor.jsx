import { useEffect, useState } from "react";
import style from "./cursor.module.scss";
import {
  useMotionValue,
  useSpring,
  motion,
  AnimatePresence,
} from "framer-motion";

export default function Cursor() {
  const [showCursor, setShowCursor] = useState(false);
  const cursorSize = 32;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
    setShowCursor(true);
  };

  const hideCursor = () => {
    setShowCursor(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <AnimatePresence>
      {showCursor && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.75 } }}
          exit={{ scale: 0 }}
          style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
          }}
          className={style.cursor}
        ></motion.div>
      )}
    </AnimatePresence>
  );
}
