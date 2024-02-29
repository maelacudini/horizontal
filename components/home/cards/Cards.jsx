import style from "./cards.module.scss";

export default function Cards() {
  return (
    <div className={style.cards}>
      <p className="h3">
        Horizontal is an Architecture Agency founded in 2016 and based in Oslo,
        Norway.
      </p>
      <p className="gray">
        We are a team of four professionals, and we firmly believe in the
        principle of minimalism and open-space. Let's talk about your projects!
      </p>
    </div>
  );
}
