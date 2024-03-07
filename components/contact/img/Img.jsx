import Image from "next/image";
import style from "./img.module.scss";

export default function Img() {
  return (
    <section className={style.imgcont}>
      <Image
        alt="office"
        src="/office.jpg"
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      />
    </section>
  );
}
