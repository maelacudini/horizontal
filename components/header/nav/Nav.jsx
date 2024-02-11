import Link from "next/link";
import style from "./nav.module.scss";
import { motion } from "framer-motion";
import { menu } from "@/utils/animations";
import { links } from "@/utils/data";

export default function Nav({ setOpen, open }) {
  return (
    <motion.nav
      variants={menu}
      initial="initial"
      animate="animate"
      exit="exit"
      className={style.nav}
    >
      <div className={style.links}>
        {links.map((link, index) => (
          <div key={index} className={style.link}>
            <Link
              onClick={() => {
                setOpen(!open);
              }}
              className="white h2"
              href={link.url}
            >
              {link.name}
            </Link>
            <span className={style.dot}>{link.emoji}</span>
          </div>
        ))}
      </div>

      <div className={style.bottom}>
        <p className="gray">&#128075; hello.horizontal@gmail.com</p>
      </div>
    </motion.nav>
  );
}
