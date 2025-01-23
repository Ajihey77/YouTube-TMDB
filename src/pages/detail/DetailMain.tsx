import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import DetailMainSide from "./DetailMainSide";
import MainContent from "./detailMainContents/MainContent";
import useQueryFetcher from "../../hooks/useQueryFetcher";
import DetailMainSkeleton from "../../components/common/skeleton/DetailMainSkeleton";

export default function DetailMain() {
  window.scrollTo({
    top: 0,
  });

  const { id, category } = useParams<{
    id: string;
    category: "movie" | "tv";
  }>();

  const { isLoading: detailLoading, data: detailData } = useQuery<
    movieDetail | tvDetail,
    Error
  >({
    queryKey: [category, id],
    queryFn: () => useQueryFetcher(`${category}/${id}`),
  });

  const { isLoading: videoLoading, data: videoData } = useQuery<
    movieDetailVideoList,
    Error
  >({
    queryKey: ["video", category, id],
    queryFn: () => useQueryFetcher(`/${category}/${id}/videos`),
  });

  if (detailLoading || videoLoading) {
    return (
      <>
        <DetailMainSkeleton />
      </>
    );
  }

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

  return <div>Error: 데이터를 불러오지 못했습니다.</div>;
}
