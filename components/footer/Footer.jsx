import Link from "next/link";
import style from "./footer.module.scss";
import { links, socials } from "@/utils/data";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <p className="h1 white">Let's work together</p>
        <div className={style.contacts}>
          <div>
            <p className={`gray ${style.title}`}>PAGES</p>
            {links.map((link, index) => (
              <Link key={index} className="white" href={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
          <div>
            <p className={`gray ${style.title}`}>PLACES</p>
            <p className="white">Some street here</p>
            <p className="white">21200</p>
            <p className="white">United Kingdom</p>
            <p className="white">Some place here</p>
          </div>
          <div>
            <p className={`gray ${style.title}`}>SOCIAL</p>
            <p className="white">Lorem ipsum dolor sit</p>
            <p className="white">Lorem ipsum dolor sit</p>
            <p className="white">Lorem ipsum dolor sit</p>
            <p className="white">Lorem ipsum dolor sit</p>
          </div>
          <div>
            <p className={`gray ${style.title}`}>SOCIAL</p>
            {socials.map((social, index) => (
              <Link key={index} className="white" href={social.url}>
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
