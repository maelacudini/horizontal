import Link from "next/link";
import style from "./cards.module.scss";

export default function Cards() {
  return (
    <div className={style.cards}>
      <p className="h3">
        Horizontal is an Architecture Agency founded in 2013 and based in Oslo,
        Norway.
      </p>
      <div className={style.bottom}>
        <p className="gray">
          We are a team of four professionals who firmly believe in the
          principles of minimalism and open space. <br /> We can't wait to
          discuss your projects.
        </p>
      </div>
    </div>
  );
}
