import style from "./hero.module.scss";
import Title from "@/components/title/Title";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.intro}>
        <p className="gray">An agency based all around you</p>

        <h1 className={style.title}>
          <Title
            justify={"flex-start"}
            phrase={
              "We are an Architecture Agency and partner for modern brands"
            }
          />
        </h1>
      </div>
    </section>
  );
}
