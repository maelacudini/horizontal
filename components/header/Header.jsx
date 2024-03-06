import style from "./header.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import horizontal from "../../public/horizontal.svg";
import Nav from "./nav/Nav";
import { useRouter } from "next/navigation";
import CursorContainer from "../cursorContainer/CursorContainer";

export default function Header() {
  const [open, setOpen] = useState(false);
  const route = useRouter();

  useEffect(() => {
    if (open) {
      document.body.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
    }

    // Cleanup function
    return () => {
      document.body.classList.remove("overlay-open");
    };
  }, [open]);

  return (
    <header id="header" className={style.header}>
      <div className={style.main}>
        <Image
          alt="horizontal"
          src={horizontal}
          height={25}
          width={100}
          loading="lazy"
          onClick={() => route.push("/")}
        />
        <CursorContainer>
          <div className={style.menu} onClick={() => setOpen(!open)}>
            <a>Menu</a>
            <Image alt="social" src={"/menu.svg"} width={25} height={25} />
          </div>
        </CursorContainer>
      </div>

      <AnimatePresence mode="wait">
        {open && <Nav open={open} setOpen={setOpen} key="nav" />}
      </AnimatePresence>
    </header>
  );
}
