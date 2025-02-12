import { useLocation } from "react-router";
import VideoItem from "../../components/ui/VideoItem";
import VideoItemSkeleton from "../../components/common/skeleton/videoItemSkeleton";
import { useQuery } from "@tanstack/react-query";
import useQueryFetcher from "../../hooks/useQueryFetcher";

export default function Search() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("results");

  const { isLoading, data } = useQuery<homeMainList, Error>({
    queryKey: [search],
    queryFn: () => useQueryFetcher(`/search/multi?query=${query}`),
  });

  const filterData = data?.results.filter(
    (item) => item.media_type !== "person"
  );
  return (
    <>
      <section className="flex-1 grid grid-cols-3 gap-y-10 pt-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <VideoItemSkeleton key={index} />
            ))
          : filterData?.map((item) => <VideoItem {...item} key={item.id} />)}
      </section>
    </>
  );
}
