import style from "./header.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { headerAnim } from "@/utils/animations";
import Image from "next/image";
import horizontal from "../../../public/horizontal.svg";
import Nav from "./nav/Nav";
import CursorContainer from "../cursorContainer/CursorContainer";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const route = useRouter();

  useEffect(() => {
    if (open) {
      document.body.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < prevScrollY;

      setIsHeaderVisible(isScrollingUp || currentScrollY === 0);
      setPrevScrollY(currentScrollY);

      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      document.body.classList.remove("overlay-open");
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open, prevScrollY]);

  return (
    <>
      <motion.header
        variants={headerAnim}
        animate={isHeaderVisible ? "animate" : "initial"}
        id="header"
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
          <CursorContainer>
            <div className={style.menu} onClick={() => setOpen(!open)}>
              <p>Menu</p>
              <Image alt="social" src={"/menu.svg"} width={25} height={25} />
            </div>
          </CursorContainer>
        </div>
      </motion.header>
      <AnimatePresence mode="wait">
        {open && <Nav open={open} setOpen={setOpen} key="nav" />}
      </AnimatePresence>
    </>
  );
}
