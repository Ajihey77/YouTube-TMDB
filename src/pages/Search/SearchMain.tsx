import { useLocation } from "react-router";
import useDataFetcher from "../../hooks/useDataFetcher";
import VideoItem from "../../components/UI/VideoItem";
import VideoItemSkeleton from "../../components/common/skeleton/VideoItemSkeleton";

export default function Search() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("results");
  const { data, loading } = useDataFetcher<allList>(
    `/search/multi?query=${query}`
  );
  const filterData = data?.results.filter(
    (item) => item.media_type !== "person"
  );
  return (
    <>
      <section className="flex-1 grid grid-cols-3 gap-y-10 pt-6">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <VideoItemSkeleton key={index} />
            ))
          : filterData?.map((item) => <VideoItem {...item} key={item.id} />)}
      </section>
    </>
  );
}
