import style from "./Language.module.css";

export default function language() {
  return (
    <>
      <span className={style.language_circle}></span>
      <span className={style.language_text}>JavaScript</span>
    </>
  );
}
