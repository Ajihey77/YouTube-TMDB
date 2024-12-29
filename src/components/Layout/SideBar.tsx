import SideBarBtn from "../UI/SideBarBtn";
export default function SideBar() {
  return (
    <aside className="w-60 mr-5 z-10 p-3">
      <SideBarBtn img={"/icon.svg"} title={"홈"} link={"/"} />
      <SideBarBtn img={"/icon.svg"} title={"영화"} link={"/movie"} />
      <SideBarBtn img={"/icon.svg"} title={"TV"} link={"/tv"} />
    </aside>
  );
}
