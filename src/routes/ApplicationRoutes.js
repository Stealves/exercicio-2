import { Routes, Route } from "react-router-dom";
import { Home } from '../views/Home.js';
import { Detail } from '../views/Detail.js';

export function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:movieID" element={<Detail />} />
    </Routes>
  )
}