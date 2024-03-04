import Title from "@/components/title/Title";
import style from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.intro}>
        <p className="gray">Want to join our team?</p>

        <h1 className={style.title}>
          <Title
            justify={"flex-start"}
            phrase={
              "We are constantly seeking new talent to join our agency, let's discover the perfect fit for you."
            }
          />
        </h1>
      </div>
    </section>
  );
}
