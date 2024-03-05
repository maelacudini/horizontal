import style from "./header.module.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import horizontal from "../../public/horizontal.svg";
import Nav from "./nav/Nav";
import { toggleanim } from "@/utils/animations";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const route = useRouter();
  const pathname = usePathname();

  return (
    <header
      style={{
        display: pathname.startsWith("/work/") && "none",
      }}
      className={style.header}
    >
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
            <div onClick={() => setOpen(!open)}>
              <Image
                alt="open"
                src="/menu.svg"
                height={20}
                width={20}
                loading="lazy"
              />
            </div>
            <div onClick={() => setOpen(!open)}>
              <Image
                alt="close"
                src="/close.svg"
                height={20}
                width={20}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {open && <Nav open={open} setOpen={setOpen} key="nav" />}
      </AnimatePresence>
    </header>
  );
}
