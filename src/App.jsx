import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Overview from "./Overview";
import Repositories from "./Repositories";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Overview" element={<Overview />} />
      <Route path="/Repositories" element={<Repositories />} />
    </Routes>
  );
}
