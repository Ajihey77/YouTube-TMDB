import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import DetailMainSide from "./DetailMainSide";
import DetailMainContent from "./DetailMainContent";
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
    videoData,
    Error
  >({
    queryKey: ["video", category, id],
    queryFn: () => useQueryFetcher(`/${category}/${id}/videos`),
  });

  function isCategory<T extends keyof detailMap>(
    category: string,
    detailData: unknown
  ): detailData is detailMap[T] {
    if (!detailData) return false;
    return category === "movie" || category === "tv";
  }

  if (detailLoading || videoLoading) {
    return <DetailMainSkeleton />;
  }

  if (isCategory(category!, detailData)) {
    return (
      <div className="flex w-full mt-8">
        <DetailMainContent dstailItem={detailData} videoList={videoData!} />
        <DetailMainSide dstailItem={detailData} />
      </div>
    );
  }
}
