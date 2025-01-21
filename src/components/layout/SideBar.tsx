import SideBarBtn from "../ui/SideBarBtn";
export default function SideBar() {
  return (
    <aside className=" w-60 mr-5 z-10 p-3">
      <SideBarBtn img={"/icon.svg"} title={"홈"} link={"/"} />
    </aside>
  );
}
