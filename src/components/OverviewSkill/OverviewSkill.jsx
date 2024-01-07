import { DummyData } from "../../DummyData";
import style from "./OverviewSkill.module.css";

export default function OverviewSkill() {
  return (
    <div className={style.skill}>
      <strong className={style.title}>Skill</strong>
      <ul className={style.list}>
        {DummyData.overview_skill.map((data, index) => {
          return (
            <li key={index} className={style.item}>
              <img src={data.skill_imgURL} alt={data.skill_language} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
