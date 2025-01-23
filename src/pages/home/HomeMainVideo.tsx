import { axiosInstance } from "../../api/axios";
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useHomeStore } from "../../store/homStore";
import Loading from "../../components/common/Loading";
import VideoItem from "../../components/ui/VideoItem";
import VideoItemSkeleton from "../../components/common/skeleton/videoItemSkeleton";

export default function HomeMainVideo() {
  let target = useRef(null);

  const { category } = useHomeStore();

  const categoryData = {
    trend: "/trending/all/week",
    latest: "/trending/all/day",
    movie: "/movie/popular",
    tv: "/tv/popular",
  };

  const fetchTrend = async ({ pageParam = 1 }): Promise<allList> => {
    const response = await axiosInstance.get(
      `${categoryData[category]}?page=${pageParam}`
    );
    return response.data;
  };

  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [category],
      queryFn: fetchTrend,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => (lastPage.page || 0) + 1,
    });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });
    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [fetchNextPage]);

  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      <section className="flex-1 grid grid-cols-3 gap-y-10 pt-16">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <VideoItemSkeleton key={index} />
            ))
          : data?.pages.map((i) =>
              i.results.map((item) => <VideoItem {...item} key={item.id} />)
            )}
        {isFetchingNextPage && <Loading />}
        <div ref={target} className="w-1 h-1"></div>
      </section>
    </>
  );
}
