import { useNavigate } from "react-router";
import { useHomeStore } from "../../store/homStore";
import { useModalStore } from "../../store/modalStore";

export default function VideoItem(item: homeMain) {
  const { setId, setMediaType, openModal } = useModalStore();
  const { category } = useHomeStore();
  const navigate = useNavigate();
  return (
    <article className="flex flex-col mb-4 mx-2">
      {/* 썸네일 */}
      <div
        className="relative inline-block hover:scale-105 transition-transform "
        onClick={() => {
          if (item.backdrop_path) {
            openModal();
            setId(item.id);
            setMediaType(category === "tv" ? "tv" : item.media_type);
          } else {
            alert("영상이 존재하지 않습니다.");
          }
        }}
      >
        {/* 이미지 */}
        <img
          className="rounded-xl w-full h-auto aspect-video object-cover"
          loading="lazy"
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w500${
                  item.backdrop_path || item.poster_path
                }`
              : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
          }
          alt="Movie Thumbnail"
        />

        {/* 플레이 버튼 */}
        {item.backdrop_path && (
          <button className="absolute inset-0 flex items-center justify-center text-white transition-transform  transform group-hover:scale-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-20 h-20"
            >
              <path
                d="M8 5v14l11-7z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
      </div>

      {/* 하단 정보 */}
      <div className="flex flex-row pt-3">
        {/* 인기도*/}
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-3">
            <div className="bg-black rounded-full w-full h-full flex items-center justify-center text-white text-sm font-bold ">
              {Number(item.vote_average.toFixed(1)) * 10}%
            </div>
          </div>
        </div>

        {/* 비디오 정보 */}
        <div
          className="cursor-pointer"
          onClick={() =>
            navigate(`/datail/${item.media_type || category}/${item.id}`)
          }
        >
          <div>
            <span className="font-bold">
              {item.title || item.name} |{" "}
              {item.original_name || item.original_title}
            </span>
          </div>
          <div>
            <span className="text-[#848484]">
              {item.media_type && `${item.media_type} ·`}
              {item.first_air_date || item.release_date}
            </span>
          </div>
        </div>
        {/* 점 버튼 */}
        <div className="ml-auto">
          <button className="w-6 h-6 bg-[url('/dot.svg')] bg-no-repeat bg-center aspect-square"></button>
        </div>
      </div>
    </article>
  );
}
