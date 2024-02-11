import style from "./service.module.scss";

export default function Service({ service, index }) {
  return (
    <div className={style.service}>
      <div className={style.intro}>
        <small>What we do</small>
      </div>
    </div>
  );
}
