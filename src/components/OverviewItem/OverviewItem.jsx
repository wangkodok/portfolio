import { Link } from "react-router-dom";
import RepositoriesIcon from "../../RepositoriesIcon";
import ProjectLanguage from "../common/ProjectLanguage";
import { DummyData } from "../../DummyData";
import style from "./OverviewItem.module.css";
import RetrospectiveSection from "../common/RetrospectiveSection";

export default function OverviewItem() {
  return (
    <>
      {DummyData.work.map((data, index) => {
        return (
          <li key={index} className={style.item}>
            <div className={style.area}>
              <div>
                <div className={style.intro}>
                  <RepositoriesIcon />
                  <Link to={data.project_link} target="_blank">
                    {data.title}
                  </Link>
                  <strong>Public</strong>
                </div>
                <div className={style.desc}>
                  <p>{data.text_content}</p>
                </div>
                <RetrospectiveSection data={data} />
              </div>
              <p className={style.language}>
                <ProjectLanguage
                  innerText={data.dev_language}
                  color={data.dev_language_color}
                />
              </p>
            </div>
          </li>
        );
      })}
    </>
  );
}
