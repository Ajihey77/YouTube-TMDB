import IframVIdeo from "../../components/common/IframVIdeo";

export default function DetailMainSide({
  dstailItem,
  videoList,
}: {
  dstailItem: movieDetail | tvDetail;
  videoList: movieDetailVideoList;
}) {
  const filterVideoList = videoList?.results.slice(1);

  return (
    <section className="ml-5 mr-10">
      <article className="flex flex-col border-gray-200 border rounded-xl p-5">
        <span className="font-extrabold text-[15px]">YouTube에서 보기</span>
        <div className="flex mt-8">
          <img
            src={`https://image.tmdb.org/t/p/w200${dstailItem?.poster_path}`}
            className="rounded-lg h-40"
          />
          <div className="ml-4">
            <span className="font-normal text-lg">
              {"title" in dstailItem ? dstailItem.title : dstailItem.name}
            </span>
            <div className="flex flex-col mt-2 gap-2">
              <span className="text-[#848484] text-[11px] ">
                {/* {"origin_country" in dstailItem
                  ? `${dstailItem.origin_country} · ${
                      dstailItem.adult ? "어른" : "아동"
                    } · ${dstailItem.release_date}`
                  : `${dstailItem.origin_country} · ${dstailItem.first_air_date}`} */}
              </span>
              <span className="text-[#848484] text-[11px]">
                영어 및 한국어 오디오
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
          </div>
        </div>
      </article>
      <article className="flex flex-col gap-5 mt-7">
        {filterVideoList?.map((videoItem) => (
          <IframVIdeo
            videoKey={videoItem.key || ""}
            width="315"
            height="179"
            key={videoItem.id}
          />
        ))}
      </article>
    </section>
  );
}
