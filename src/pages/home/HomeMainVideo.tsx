import { useInfiniteQuery } from "@tanstack/react-query";
import VideoItemSkeleton from "../../components/common/skeleton/videoItemSkeleton";
import VideoItem from "../../components/ui/VideoItem";
import useDataFetcher from "../../hooks/useDataFetcher";
import { useHomeStore } from "../../store/homStore";
import { axiosInstance } from "../../api/axios";

export default function HomeMainVideo() {
  const { category } = useHomeStore();

  // 모든 데이터를 한번에 가져오기
  const { data: trendData, loading: trendLoading } =
    useDataFetcher<allList>("/trending/all/day");

  const { data: movieData, loading: movieLoading } = useDataFetcher<allList>(
    "/movie/popular?page=2"
  );
  const { data: tvData, loading: tvLoading } =
    useDataFetcher<allList>("/tv/popular");

  const d = {
    trend: "/trending/all/day",
    movie: "/movie/popular",
    tv: "/tv/popular",
  };

  const fetchTrend = async ({ pageParam = 1 }): Promise<allList> => {
    const response = await axiosInstance.get(
      `${d[category]}?page=${pageParam}`
    );
    const data = await response.data;
    return data;
  };
  const {
    data: tData,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [d[category]],
    queryFn: fetchTrend,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.page || 0) + 1,
  });
  console.log(tData);

  const categoryData = {
    trend: tData?.pages,
    movie: movieData?.results,
    tv: tvData?.results,
    latest: trendData?.results
      ? [...trendData.results].sort((a, b) => {
          const dateA = new Date(a.first_air_date || a.release_date || "");
          const dateB = new Date(b.first_air_date || b.release_date || "");
          return dateB.getTime() - dateA.getTime();
        })
      : [],
  };

  return (
    <>
      <section className="flex-1 grid grid-cols-3 gap-y-10">
        {trendLoading || movieLoading || tvLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <VideoItemSkeleton key={index} />
            ))
          : tData?.pages.map((i) =>
              i.results.map((item) => <VideoItem {...item} key={item.id} />)
            )}
        <button onClick={() => fetchNextPage()}>Load More</button>
      </section>
    </>
  );
}
