import { Link } from "react-router-dom";
import style from "./RepositoriesInfo.module.css";

export default function RepositoriesInfo() {
  return (
    <section className={style["repositories-content"]}>
      <h2 className={style.title}>콘텐츠 제목</h2>
      <ul className={style.list}>
        <li className={style.item}>
          <div>
            <Link to="">콘텐츠 추가 예정</Link>
            <p>콘텐츠 설명을 작성하십시오.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
