import { benefits } from "@/utils/data";
import style from "./benefits.module.scss";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className={style.benefits}>
      <div className={style.main}>
        <h2>What about the benefits we offer?</h2>
        <div className={style.container}>
          {benefits.map((benefit, index) => (
            <div key={index} className={style.benefit}>
              <div className={style.imgcont}>
                <Image alt="image" src={benefit.img} height={250} width={250} />
              </div>
              <p className="h4">{benefit.title}</p>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
