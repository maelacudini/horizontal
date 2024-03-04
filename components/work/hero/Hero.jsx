import Title from "@/components/title/Title";
import style from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.intro}>
        <p className="gray">Let's talk about our work</p>

        <h1 className={style.title}>
          <Title
            justify={"flex-start"}
            phrase={
              "With decades of expertise in the field, immerse yourself in our latest projects."
            }
          />
        </h1>
      </div>
    </section>
  );
}
