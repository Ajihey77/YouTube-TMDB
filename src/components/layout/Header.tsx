import { useNavigate } from "react-router";
import SearchBar from "../ui/SearchBar";

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav className="fixed flex justify-between gap-x-44  h-14 px-4 mx-4 bg-white z-50 w-full">
      {/* 메뉴 로고 */}
      <div id="start" className="flex justify-items-center">
        <button className=" flex-1 bg-[url('/hamburger.svg')] bg-no-repeat bg-center aspect-square"></button>
        <button
          className="flex-[2] bg-[url('/logo.svg')]  bg-no-repeat bg-center aspect-video mx-3"
          onClick={() => navigate("/")}
        ></button>
      </div>

      {/* 검색 */}
      <SearchBar />

      {/* 우측 버튼 */}
      <div id="end" className="flex justify-items-center">
        <button className="bg-[url('/right1.svg')] bg-no-repeat bg-center aspect-square "></button>
        <button className="bg-[url('/right2.svg')] bg-no-repeat bg-center aspect-square "></button>
      </div>
    </nav>
  );
}
