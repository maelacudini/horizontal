import Title from "@/components/common/title/Title";
import style from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.intro}>
        <p className="gray">Interested in joining us?</p>

        <h1 className={style.title}>
          <Title
            justify={"flex-start"}
            phrase={
              "We're continuously scouting for clients, let's talk about your new projects."
            }
          />
        </h1>
      </div>
    </section>
  );
}
