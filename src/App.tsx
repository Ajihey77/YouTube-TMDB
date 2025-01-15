import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import HomeMain from "./pages/home/HomeMain";
import Search from "./pages/search/SearchMain";
import { useModalStore } from "./store/modalStore";
import Modal from "./components/common/Modal";
import DetailMain from "./pages/detail/DetailMain";

export default function App() {
  const { modal } = useModalStore();
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeMain />} />
          <Route path="/datail/:category/:id" element={<DetailMain />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
      {modal && <Modal />}
    </>
  );
}
