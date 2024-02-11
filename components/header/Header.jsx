import Link from "next/link";
import style from "./header.module.scss";
import { useState } from "react";
import Nav from "./nav/Nav";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={style.header}>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={style.menuicon}
        style={open ? { gap: "0rem" } : { gap: "0.5rem" }}
      >
        <span></span>
        <span style={open ? { opacity: 0 } : { opacity: 1 }}></span>
      </div>
      <AnimatePresence mode="wait">
        {open && <Nav open={open} setOpen={setOpen} key="nav" />}
      </AnimatePresence>
    </header>
  );
}
