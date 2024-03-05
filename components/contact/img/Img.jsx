import Image from "next/image";
import style from "./img.module.scss";

export default function Img() {
  return (
    <section className={style.imgcont}>
      <Image alt="office" src="/office.jpg" fill loading="eager" priority />
    </section>
  );
}
