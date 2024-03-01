import Image from "next/image";
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
          {/* <Image
            className={style.img}
            src="/icon.svg"
            alt="icon"
            height={50}
            width={50}
          /> */}
        </h1>
      </div>
    </section>
  );
}
