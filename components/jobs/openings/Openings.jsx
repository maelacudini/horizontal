import { jobs } from "@/utils/data";
import style from "./openings.module.scss";
import Image from "next/image";
import CursorContainer from "@/components/cursorContainer/CursorContainer";

export default function Openings() {
  return (
    <section className={style.openings}>
      <div className={style.main}>
        <h2>Current openings</h2>

        <div className={style.list}>
          {jobs.map((job, index) => (
            <CursorContainer key={index + 1}>
              <div className={style.job}>
                <div>
                  <p className="gray">{job.date}</p>
                  <p className="h4">{job.role}</p>
                </div>
                <div>
                  <p>{job.place}</p>
                  <Image
                    alt="arrow"
                    src="/arrow.svg"
                    height={25}
                    width={25}
                    loading="lazy"
                  />
                </div>
              </div>
            </CursorContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
