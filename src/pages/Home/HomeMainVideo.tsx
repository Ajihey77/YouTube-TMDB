import VideoItemSkeleton from "../../components/common/skeleton/videoItemSkeleton";
import VideoItem from "../../components/UI/VideoItem";
import useDataFetcher from "../../hooks/useDataFetcher";
import { useHomeStore } from "../../store/homStore";

export default function HomeMainVideo() {
  const { category } = useHomeStore();

  const apiEndpoints: { [key: string]: string } = {
    trend: "/trending/all/day",
    movie: "/movie/popular",
    tv: "/tv/popular",
  };

  const { data, loading } = useDataFetcher<allList>(apiEndpoints[category]);

  const { data: latestData, loading: latestLoading } =
    useDataFetcher<allList>("/trending/all/day");
  const recentVideos = [...(latestData?.results || [])].sort((a, b) => {
    const dateA = new Date(a.first_air_date || a.release_date || "");
    const dateB = new Date(b.first_air_date || b.release_date || "");
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      <section className="flex-1 grid grid-cols-3 gap-y-10">
        {loading || latestLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <VideoItemSkeleton key={index} />
            ))
          : (category === "latest" ? recentVideos : data?.results)?.map(
              (item) => <VideoItem {...item} key={item.id} />
            )}
      </section>
    </>
  );
}
