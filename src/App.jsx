import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Repositories from "./pages/Repositories";

export default function App() {
  return (
    <Routes>
      <Route path="/overview" element={<Overview />} />
      <Route path="/repositories" element={<Repositories />} />
    </Routes>
  );
}
