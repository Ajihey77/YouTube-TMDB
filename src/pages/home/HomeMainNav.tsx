import CategoryBtn from "../../components/ui/CategoryBtn";

export default function HomeMainNav() {
  return (
    <nav className="fixed flex justify-items-center h-[56px] z-10 mb-5 bg-white w-full">
      <div className="flex items-center gap-3">
        <CategoryBtn categoryData="trend">트렌드</CategoryBtn>
        <CategoryBtn categoryData="latest">최신 인기 예고편</CategoryBtn>
        <CategoryBtn categoryData="movie">인기 영화</CategoryBtn>
        <CategoryBtn categoryData="tv"> 인기 TV</CategoryBtn>
      </div>
    </nav>
  );
}
