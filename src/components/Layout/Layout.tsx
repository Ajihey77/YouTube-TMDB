import { Outlet } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex h-screen">
        <SideBar />
        <Outlet />
      </main>
    </>
  );
}
