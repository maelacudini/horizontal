import Title from "@/components/title/Title";
import style from "./hero.module.scss";

export default function Hero() {
  return (
    <article className={style.hero}>
      <p className="h4">Based in Oslo, since 2018</p>
      <Title phrase={"Horizontal is your new Architecture Agency."} cl={"h1"} />
      <p className={`h4 gray`}>Horizontal Architecture Agency</p>
    </article>
  );
}
