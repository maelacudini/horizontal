import style from "./hero.module.scss";

export default function Hero() {
  return (
    <article className={style.hero}>
      <div className={style.bottom}>
        <h1 className="white">Horizontal Architect Agency</h1>
      </div>
    </article>
  );
}
