import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import HomeMain from "./pages/home/HomeMain";
import Search from "./pages/search/SearchMain";
import { useModalStore } from "./store/modalStore";
import Modal from "./components/common/Modal";
import DetailMain from "./pages/detail/DetailMain";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App() {
  const queryClient = new QueryClient();
  const { modal } = useModalStore();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeMain />} />
            <Route path="/datail/:category/:id" element={<DetailMain />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
        {modal && <Modal />}
      </QueryClientProvider>
    </>
  );
}
