import style from "./OverviewInfo.module.css";
import OverviewSkill from "../OverviewSkill/OverviewSkill";
import OverviewWork from "../OverviewWork/OverviewWork";

export default function OverviewInfo() {
  return (
    <section className={style["overview-content"]}>
      <h2 className="blind">개요</h2>
      <div className={style.md}>
        <p className={style.desc}>portfolio/README.md</p>
        <p>안녕하세요.</p>
        <OverviewSkill />
      </div>
      <OverviewWork />
    </section>
  );
}
