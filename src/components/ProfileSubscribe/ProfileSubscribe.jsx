import style from "./ProfileSubscribe.module.css";
import FollowersIcon from "../../FollowersIcon";

export default function ProfileSubscribe() {
  return (
    <div className={style.sns}>
      <FollowersIcon />
      <ul className={style.list}>
        <li className={style.item}>999+ followers</li>
        <li className={style.item}>999+ following</li>
      </ul>
    </div>
  );
}
