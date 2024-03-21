import Link from "next/link";
import style from "./info.module.scss";
import Image from "next/image";
import { socials } from "@/utils/data";
import CursorContainer from "@/components/common/cursorContainer/CursorContainer";

export default function Info() {
  return (
    <section className={style.info}>
      <div className={style.main}>
        <div className={style.row}>
          <div className={style.col}>
            <h3>Get in touch</h3>
            <CursorContainer>
              <Link href="mailto:">hello@horizontal.com</Link>
              <Link href="mailto:">hello.hr@horizontal.com</Link>
            </CursorContainer>
          </div>
          <div className={style.col}>
            <h3>Work with us</h3>
            <CursorContainer>
              <Link href="mailto:">hello.jobs@horizontal.com</Link>
              <Link href="mailto:">hello.hr@horizontal.com</Link>
              <Link href="/jobs">/jobs</Link>
            </CursorContainer>
          </div>
          <div className={style.col}>
            <h3>Where and when</h3>
            <p>
              Open from Monday to Friday <br /> Oslo, Norway <br /> Some street,
              12
            </p>
          </div>
        </div>

        <div className={style.disclaimer}>
          <p className="gray">
            Please note that this website is entirely fictional, and all
            content, including projects, descriptions, and any other information
            presented here, is entirely invented for creative purposes. Any
            resemblance to real persons, living or dead, or actual events is
            purely coincidental. This website serves solely as a platform for
            artistic expression and imagination.
          </p>
        </div>

        <div className={style.socials}>
          {socials.map((social, index) => (
            <CursorContainer key={index}>
              <a href={social.url}>
                <Image alt="social" src={social.img} height={15} width={15} />
              </a>
            </CursorContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
