import style from "./ProfileBadge.module.css";
import passion from "../../image/passion.png";
import book from "../../image/book.jpg";

export default function ProfileBadge() {
  return (
    <div className={style.achievements}>
      <strong className={style.title}>My Badge</strong>
      <ul className={style.list}>
        <li className={style.item}>
          <img src={passion} alt="열정" title="열정" />
        </li>
        <li className={style.item}>
          <img src={book} alt="자기 개발" title="자기 개발" />
        </li>
      </ul>
    </div>
  );
}
