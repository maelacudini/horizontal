import { links, socials } from "@/utils/data";
import style from "./nav.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { modalanim, slideupgeneric } from "@/utils/animations";
import Image from "next/image";

export default function Nav({ open, setOpen }) {
  return (
    <motion.nav
      variants={modalanim}
      initial="initial"
      animate="animate"
      exit="exit"
      className={style.nav}
    >
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
              <Link
                onClick={() => setOpen(!open)}
                className="h3"
                href={link.url}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        variants={slideupgeneric}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={6}
        className={style.bottom}
      >
        <div>
          <p className="gray">Say hello</p>
          <p className="gray">Some copyright statement</p>
        </div>

        <div>
          {socials.map((social, index) => (
            <Image
              key={index}
              alt="social"
              src={social.img}
              width={15}
              height={15}
            />
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
