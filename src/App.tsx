import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import HomeMain from "./pages/Home/HomeMain";
import MovieMain from "./pages/Movie/MovieMain";
import TvMain from "./pages/Tv/TvMain";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeMain />} />
        <Route path="/movie" element={<MovieMain />} />
        <Route path="/tv" element={<TvMain />} />
      </Route>
    </Routes>
  );
}
