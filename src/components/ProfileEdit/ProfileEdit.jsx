import style from "./ProfileEdit.module.css";

export default function ProfileEdit() {
  return (
    <div className={style.edit}>
      <p className={style.title}>front-end & publisher</p>
      <p className={style.desc}>포트폴리오</p>
      <button className={style.btn}>Edit profile</button>
    </div>
  );
}
