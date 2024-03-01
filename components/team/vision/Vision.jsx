import { projects } from "@/utils/data";
import style from "./vision.module.scss";
import Image from "next/image";
import Title from "@/components/title/Title";

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
          {projects.map((project, index) => (
            <Image
              alt="award"
              src={project.images[0]}
              key={index}
              width={75}
              height={75}
              loading="lazy"
            />
          ))}
          {projects.map((project, index) => (
            <Image
              alt="award"
              src={project.images[0]}
              key={index}
              width={75}
              height={75}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
