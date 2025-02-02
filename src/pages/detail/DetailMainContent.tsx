import IframVideo from "../../components/common/IframVIdeo";
import Comment from "../detail/detailMainContents/Comment";
import MovieDescription from "./detailMainContents/MovieDescription";

export default function MainContent({
  dstailItem,
  videoList,
}: {
  dstailItem: movieDetail | tvDetail;
  videoList: videoData;
}) {
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
        <MovieDescription {...dstailItem} />
        <Comment />
      </div>
    </div>
  );
}
