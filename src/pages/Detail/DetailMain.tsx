import { useParams } from "react-router";
import useDataFetcher from "../../hooks/useDataFetcher";
import DetailMainSide from "./DetailMainSide";
import DetailMainSkeleton from "../../components/common/skeleton/DetailMainSkeleton";
import MainContent from "./DetailMainContents/MainContent";

export default function DetailMain() {
  const { id, category } = useParams<{
    id: string;
    category: "movie" | "tv";
  }>();

  const { data: detailData, loading: detailLoading } = useDataFetcher<
    movieDetail | tvDetail
  >(`${category}/${id}`);
  const { data: videoData, loading: videoLoading } =
    useDataFetcher<movieDetailVideoList>(`/${category}/${id}/videos`);

  if (detailLoading || videoLoading) {
    return (
      <>
        {Array.from({ length: 6 }).map((_, index) => (
          <DetailMainSkeleton key={index} />
        ))}
      </>
    );
  }

  // category에 따라 데이터 타입 분기 처리
  if (category === "movie" && detailData) {
    const movieData = detailData as movieDetail;
    return (
      <div className="flex w-full mt-8">
        <MainContent dstailItem={movieData} videoList={videoData!} />
        <DetailMainSide dstailItem={movieData} videoList={videoData!} />
      </div>
    );
  }

  if (category === "tv" && detailData) {
    const tvData = detailData as tvDetail;
    return (
      <div className="flex w-full mt-8">
        <MainContent dstailItem={tvData} videoList={videoData!} />
        <DetailMainSide dstailItem={tvData} videoList={videoData!} />
      </div>
    );
  }

  // 기본 fallback 처리
  return <div>Error: 데이터를 불러오지 못했습니다.</div>;
}
