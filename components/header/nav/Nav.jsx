import { links, socials } from "@/utils/data";
import style from "./nav.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { modalanim, slideupgeneric } from "@/utils/animations";
import Image from "next/image";
import { useEffect, useState } from "react";
import CursorContainer from "@/components/cursorContainer/CursorContainer";

export default function Nav({ open, setOpen }) {
  const [date, setDate] = useState("00.00.00");
  const [hour, setHour] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);

    const data = new Date()
      .toLocaleDateString("it-IT", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ".");

    setDate(data);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      variants={modalanim}
      initial="initial"
      animate="animate"
      exit="exit"
      className={style.nav}
    >
      <CursorContainer>
        <motion.div
          variants={slideupgeneric}
          initial="initial"
          animate="animate"
          exit="exit"
          key={"close"}
          custom={1}
          className={style.close}
          onClick={() => setOpen(!open)}
        >
          <a className="white">Close</a>
          <Image alt="social" src={"/close.svg"} width={25} height={25} />
        </motion.div>
      </CursorContainer>

      <div className={style.main}>
        <div className={style.links}>
          {links.map((link, index) => (
            <motion.div
              variants={slideupgeneric}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={index + 1}
              className={style.link}
              key={index}
            >
              <CursorContainer>
                <Link
                  onClick={() => setOpen(!open)}
                  className="h1 white"
                  href={link.url}
                >
                  {link.name}
                </Link>
              </CursorContainer>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        variants={slideupgeneric}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={7}
        key={"bottom"}
        className={style.bottom}
      >
        <div>
          <p className="white">Say hello</p>
          <p className="white">Copyright statement</p>
        </div>

        <div>
          <span className="white">{date}</span>
          <span className="white">{hour}</span>
        </div>

        <div>
          {socials.map((social, index) => (
            <CursorContainer key={index}>
              <Image alt="social" src={social.img} width={15} height={15} />
            </CursorContainer>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
