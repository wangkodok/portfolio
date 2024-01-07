import Profile from "./components/Profile/Profile";
import OverviewInfo from "./components/OverviewInfo/OverviewInfo";
import style from "./OverviewContainer.module.css";

export default function OverviewContainer() {
  return (
    <main>
      <div className={style["inner"]}>
        <Profile />
        <OverviewInfo />
      </div>
    </main>
  );
}
