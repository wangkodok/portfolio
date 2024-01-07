import style from "./ProfileBadge.module.css";
import passion from "../../image/passion.png";

export default function ProfileBadge() {
  return (
    <div className={style.achievements}>
      <strong className={style.title}>My Badge</strong>
      <ul className={style.list}>
        <li className={style.item}>
          <img src={passion} alt="passion" />
        </li>
      </ul>
    </div>
  );
}
