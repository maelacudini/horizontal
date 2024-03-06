import style from "./vision.module.scss";
import Title from "@/components/title/Title";
import { awards } from "@/utils/data";
import img from "../../../public/award.png";
import img2 from "../../../public/award1.png";
import Image from "next/image";

const imgs = [img, img, img, img2, img2];

export default function Vision() {
  return (
    <section className={style.vision}>
      <div className={style.main}>
        <p className="gray">
          The awards we've been honoured with, inspired by our vision
        </p>
        <p className="h2">
          Our vision is to create meaningful experiences through minimalism and
          open space, fostering transparency and innovation
        </p>

        <div className={style.list}>
          {awards.map((award, index) => (
            <div className={style.award} key={index}>
              <p>{index + 1} x</p>
              <div>
                <p>{award.title}</p>
                <p>{award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
