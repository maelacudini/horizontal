import style from "./header.module.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import horizontal from "../../public/horizontal.svg";
import menu from "../../public/menu.svg";
import close from "../../public/close.svg";
import Nav from "./nav/Nav";
import { toggleanim } from "@/utils/animations";
import { useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const route = useRouter();

  return (
    <header className={style.header}>
      <div className={style.main}>
        <Image
          alt="horizontal"
          src={horizontal}
          height={25}
          width={100}
          loading="lazy"
          onClick={() => route.push("/")}
        />
        <div className={style.toggle}>
          <motion.div
            variants={toggleanim}
            initial="initial"
            animate={open ? "animate" : "initial"}
            className={style.slider}
          >
            <p onClick={() => setOpen(!open)}>Menu</p>
            <p onClick={() => setOpen(!open)}>Close</p>
          </motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {open && <Nav open={open} setOpen={setOpen} key="nav" />}
      </AnimatePresence>
    </header>
  );
}
