import OverviewItem from "../OverviewItem/OverviewItem";
import style from "./OverviewList.module.css";

export default function OverviewList() {
  return (
    <ul className={style.list}>
      <OverviewItem />
    </ul>
  );
}
