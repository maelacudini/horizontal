import { useTransform, motion, useScroll } from "framer-motion";
import Title from "../title/Title";
import style from "./footer.module.scss";
import { socials } from "@/utils/data";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-700, 0]);

  return (
    <footer ref={ref} className={style.footer}>
      <motion.div style={{ y }} className={style.main}>
        <div className={style.intro}>
          <Title
            phrase={"Let's work together"}
            justify={"center"}
            col={"white"}
          />
          <p className="h4 gray">
            We would love to hear what's your next big project, you can find us
            on the following platform.
          </p>

          <div className={style.socials}>
            {socials.map((social, index) => (
              <a key={index} className="white" href={social.url}>
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
      <div className={style.privacy}>
        <small className="gray">© Horizontal Architecture Studio</small>
        <small className="gray">2024 Privacy Policy</small>
        <small className="gray">Cookie Policy</small>
      </div>
    </footer>
  );
}
