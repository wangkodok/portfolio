import ProfilePhoto from "../common/ProfilePhoto";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import ProfileSubscribe from "../ProfileSubscribe/ProfileSubscribe";
import ProfileBadge from "../ProfileBadge/ProfileBadge";
import style from "./Profile.module.css";

export default function Profile() {
  return (
    <section className={style.profile}>
      <h2 className="blind">프로필</h2>
      <ProfilePhoto />
      <ProfileEdit />
      <ProfileSubscribe />
      <ProfileBadge />
    </section>
  );
}
