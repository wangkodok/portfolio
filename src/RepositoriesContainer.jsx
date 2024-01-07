import Profile from "./components/Profile/Profile";
import RepositoriesInfo from "./components/RepositoriesInfo/RepositoriesInfo";

import style from "./OverviewContainer.module.css";

export default function RepositoriesContainer() {
  return (
    <main>
      <div className={style["inner"]}>
        <Profile />
        <RepositoriesInfo />
      </div>
    </main>
  );
}
