import Title from "../title/Title";
import style from "./footer.module.scss";
import { socials } from "@/utils/data";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.main}>
        <div className={style.intro}>
          <Title
            phrase={"Let's work together"}
            className="white"
            cl={"white h1"}
          />
          <p className="h4 gray">
            We would love to hear what's your next big project, and you can find
            us on the following platform.
          </p>

          <div className={style.socials}>
            {socials.map((social, index) => (
              <a key={index} className="white" href={social.url}>
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className={style.privacy}>
          <small className="white">© Horizontal Architecture Studio</small>
          <small className="white">2024 Privacy Policy</small>
          <small className="white">Cookie Policy</small>
        </div>
      </div>
    </footer>
  );
}
