import { useHomeStore } from "../../store/homStore";

export default function HomeMainNav() {
  const { setCategory, category } = useHomeStore();

  return (
    <nav className="flex justify-items-center h-[56px] mt-3 z-10 mb-5">
      <div className="flex items-center gap-3">
        <button
          className={`px-3 py-1 rounded-md ${
            category === "trend"
              ? "bg-black text-white"
              : "bg-[#f2f2f2] hover:bg-slate-200"
          }`}
          onClick={() => setCategory("trend")}
        >
          트렌드
        </button>
        <button
          className={`px-3 py-1 rounded-md ${
            category === "latest"
              ? "bg-black text-white"
              : "bg-[#f2f2f2] hover:bg-slate-200"
          }`}
          onClick={() => setCategory("latest")}
        >
          최신 인기 예고편
        </button>
        <button
          className={`px-3 py-1 rounded-md ${
            category === "movie"
              ? "bg-black text-white"
              : "bg-[#f2f2f2] hover:bg-slate-200"
          }`}
          onClick={() => setCategory("movie")}
        >
          인기 영화
        </button>
        <button
          className={`px-3 py-1 rounded-md ${
            category === "tv"
              ? "bg-black text-white"
              : "bg-[#f2f2f2] hover:bg-slate-200"
          }`}
          onClick={() => setCategory("tv")}
        >
          인기 TV
        </button>
      </div>
    </nav>
  );
}
