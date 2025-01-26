export default function MovieDescription(dstailItem: movieDetail | tvDetail) {
  return (
    <>
      <div>
        <span className="font-extrabold text-3xl">
          {"title" in dstailItem ? dstailItem.title : dstailItem.name}
        </span>
        <div className="flex gap-1 mt-1">
          <span className="px-1 w-[65px] rounded-md bg-[#f2f2f2] text-[11px] text-[#737272] ">
            전체관람가
          </span>
          <span className="px-1 w-[30px] rounded-md bg-[#f2f2f2] text-[11px] text-[#737272] ">
            자막
          </span>
        </div>
      </div>
      {dstailItem.overview ? (
        <div className="bg-[#f2f2f2] rounded-lg px-5 py-7">
          <span>{dstailItem.overview}</span>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-32 mb-10 rounded-lg bg-[#F2F2F2]">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400 mx-auto mb-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 10h8M8 14h4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <p className="text-sm text-gray-500 mt-3">내용이 없습니다.</p>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <tbody>
            <tr>
              <td className="py-1 text-gray-500 font-medium">홈페이지</td>
              <td className="py-1">{dstailItem?.homepage || "정보 없음"}</td>
            </tr>
            <tr>
              <td className="py-1 text-gray-500 font-medium">개봉일/방영일</td>
              <td className="py-1">
                {"release_date" in dstailItem
                  ? dstailItem.release_date
                  : dstailItem.first_air_date || "정보 없음"}
              </td>
            </tr>
            <tr>
              <td className="py-1 text-gray-500 font-medium">상영시간</td>
              <td className="py-1">
                {"runtime" in dstailItem
                  ? dstailItem.runtime
                  : dstailItem.episode_run_time?.[0]
                  ? `${dstailItem.episode_run_time[0]}분`
                  : "정보없음"}
              </td>
            </tr>
            <tr>
              <td className="py-1 text-gray-500 font-medium">장르</td>
              <td className="py-1">
                {dstailItem?.genres?.length > 0
                  ? dstailItem.genres.map((item) => item.name).join(", ")
                  : "정보 없음"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
