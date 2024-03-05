import Image from "next/image";
import style from "./img.module.scss";

export default function Img() {
  return (
    <section className={style.imgcont}>
      <Image alt="team" src="/jobs.jpg" fill loading="lazy" />
    </section>
  );
}
