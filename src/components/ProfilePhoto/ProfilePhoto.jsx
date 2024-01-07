import img from "../../image/github.png";
import style from "./ProfilePhoto.module.css";

export default function ProfilePhoto() {
  return (
    <div className={style.img}>
      {/* <img src="https://via.placeholder.com/296" alt="샘플이미지" /> */}
      <img src={img} alt="깃허브" />
    </div>
  );
}
