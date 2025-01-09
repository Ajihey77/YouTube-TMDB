import IframVideo from "../../../components/common/IframVIdeo";
import Comment from "./Comment";

export default function MainContent({
  dstailItem,
  videoList,
}: {
  dstailItem: movieDetail | tvDetail;
  videoList: movieDetailVideoList;
}) {
  console.log(videoList);
  return (
    <div className="flex flex-col">
      {videoList?.results.length > 0 ? (
        <IframVideo videoKey={videoList?.results[0].key || ""} />
      ) : (
        <div className="relative">
          <iframe
            width="915"
            height="515"
            allowFullScreen
            className="bg-black"
          ></iframe>
          <div className="text-white absolute top-0 text-3xl">
            영상이 존재하지 않습니다.
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 my-2">
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
        <div className="bg-[#f2f2f2] rounded-lg px-5 py-7">
          <span>{dstailItem.overview}</span>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <tbody>
              <tr>
                <td className="py-1 text-gray-500 font-medium">홈페이지</td>
                <td className="py-1">{dstailItem?.homepage || "정보 없음"}</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-500 font-medium">
                  개봉일/방영일
                </td>
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
        <Comment />
      </div>
    </div>
  );
}
