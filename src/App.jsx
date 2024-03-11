import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Repositories from "./pages/Repositories";

export default function App() {
  return (
    <Routes>
      <Route path="/Overview" element={<Overview />} />
      <Route path="/Repositories" element={<Repositories />} />
    </Routes>
  );
}
