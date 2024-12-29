export default function HomeMainNav() {
  return (
    <nav className="flex justify-items-center h-[56px] mt-3">
      <div className="flex items-center gap-3">
        <button className="bg-[#f2f2f2] px-3 py-1 rounded-md">트렌드</button>
        <button className="bg-[#f2f2f2] px-3 py-1 rounded-md">
          최신 예고편
        </button>
        <button className="bg-[#f2f2f2] px-3 py-1 rounded-md">인기 영화</button>
        <button className="bg-[#f2f2f2] px-3 py-1 rounded-md">인기 TV</button>
      </div>
    </nav>
  );
}
