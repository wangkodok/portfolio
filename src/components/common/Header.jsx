import { Link } from "react-router-dom";
import Logo from "./Logo";
import OverViewIcon from "../../OverViewIcon";
import RepositoriesIcon from "../../RepositoriesIcon";
import style from "../../Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
        <h1 className={style.title}>portfolio</h1>
      </div>

      <div className={style.menu}>
        <ul className={style.list}>
          <li className={style.item}>
            <Link to="/Overview">
              <div className={style.area}>
                <OverViewIcon />
                <span className={style.text}>Overview</span>
              </div>
            </Link>
          </li>
          <li className={style.item}>
            <Link to="/Repositories">
              <div className={style.area}>
                <RepositoriesIcon />
                <span className={style.text}>Repositories</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
