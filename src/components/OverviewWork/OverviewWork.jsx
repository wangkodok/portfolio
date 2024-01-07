import OverviewList from "../OverviewList/OverviewList";
import style from "./OverviewWork.module.css";

export default function OverviewWork() {
  return (
    <div className={style["content-wrap"]}>
      <p className={style.title}>Work</p>
      <OverviewList />
    </div>
  );
}
