import { projects } from "@/utils/data";
import style from "./vision.module.scss";
import Image from "next/image";
import Title from "@/components/title/Title";
import award from "../../../public/award/award.png";
import award1 from "../../../public/award/award1.png";

const awards = [award, award, award1, award1, award1];

export default function Vision() {
  return (
    <section className={style.vision}>
      <div className={style.main}>
        <p className="gray">
          The awards we've been honoured with, inspired by our vision
        </p>
        <Title
          justify={"flex-end"}
          phrase={
            "Our vision is to create meaningful experiences through minimalism and open space, fostering transparency and innovation."
          }
        />
        <div className={style.awards}>
          {awards.map((award, index) => (
            <Image
              alt="award"
              src={award}
              key={index}
              width={100}
              height={100}
              loading="lazy"
              placeholder="blur"
              blurDataURL="../../../public/award/award3.png"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
