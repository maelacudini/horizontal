import { useEffect, useState } from "react";
import style from "./cursor.module.scss";
import { useMotionValue, motion, AnimatePresence } from "framer-motion";
import { useCursor } from "@/context/CursoreContext";

export default function Cursor() {
  const { isHovering } = useCursor();
  const [mobile, setMobile] = useState(true);

  const cursorSize = 40;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(false);
    }
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isHovering && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.15 } }}
          exit={{ scale: 0, opacity: 0 }}
          style={{
            left: mouse.x,
            top: mouse.y,
            display: mobile === false && "none",
          }}
          className={style.cursor}
        >
          <p>+</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
