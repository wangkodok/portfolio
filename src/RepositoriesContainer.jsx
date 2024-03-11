import Profile from "./components/common/Profile";
import RepositoriesInfo from "./components/RepositoriesInfo/RepositoriesInfo";
import Inner from "./components/common/Inner";

export default function RepositoriesContainer() {
  return (
    <main>
      <Inner>
        <Profile />
        <RepositoriesInfo />
      </Inner>
    </main>
  );
}
