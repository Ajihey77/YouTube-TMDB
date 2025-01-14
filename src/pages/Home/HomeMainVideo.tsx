import VideoItemSkeleton from "../../components/common/skeleton/VideoItemSkeleton";
import VideoItem from "../../components/UI/VideoItem";
import useDataFetcher from "../../hooks/useDataFetcher";
import { useHomeStore } from "../../store/homStore";

export default function HomeMainVideo() {
  const { category } = useHomeStore();
  
  // 모든 데이터를 한번에 가져오기
  const { data: trendData, loading: trendLoading } = useDataFetcher<allList>("/trending/all/day");
  const { data: movieData, loading: movieLoading } = useDataFetcher<allList>("/movie/popular");
  const { data: tvData, loading: tvLoading } = useDataFetcher<allList>("/tv/popular");

  const categoryData = {
    trend: trendData?.results,
    movie: movieData?.results,
    tv: tvData?.results,
    latest: trendData?.results 
      ? [...trendData.results].sort((a, b) => {
          const dateA = new Date(a.first_air_date || a.release_date || "");
          const dateB = new Date(b.first_air_date || b.release_date || "");
          return dateB.getTime() - dateA.getTime();
        })
      : []
  };
  console.log("trend",  categoryData.trend);
  console.log("latest", categoryData.latest);

  return (
    <>
      <section className="flex-1 grid grid-cols-3 gap-y-10">
        {trendLoading || movieLoading || tvLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <VideoItemSkeleton key={index} />
            ))
          : (category === "latest" ? categoryData.latest : categoryData[category])?.map(
              (item) => <VideoItem {...item} key={item.id} />
            )}
      </section>
    </>
  );
}
