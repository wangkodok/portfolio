import { Link } from "react-router-dom";
import RepositoriesIcon from "../../RepositoriesIcon";
import Language from "../common/Language";
import { DummyData } from "../../DummyData";
import style from "./OverviewItem.module.css";

export default function OverviewItem() {
  return (
    <>
      {DummyData.overview_work.map((data, index) => {
        return (
          <li key={index} className={style.item}>
            <div className={style.area}>
              <div className={style.intro}>
                <RepositoriesIcon />
                <Link to="/">{data.work_title}</Link>
                <strong>Public</strong>
              </div>
              <div>
                <p className={style.desc}>{data.work_desc}</p>
              </div>
              <p className={style.language}>
                <Language />
              </p>
            </div>
          </li>
        );
      })}
    </>
  );
}
