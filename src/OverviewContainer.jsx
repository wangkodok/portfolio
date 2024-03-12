import Profile from "./components/common/Profile";
import OverviewInfo from "./components/common/OverviewInfo";
import Inner from "./components/common/Inner";

export default function OverviewContainer() {
  return (
    <main>
      <Inner>
        <Profile />
        <OverviewInfo />
      </Inner>
    </main>
  );
}
