import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import VideoItemSkeleton from "../../components/common/skeleton/videoItemSkeleton";
import VideoItem from "../../components/ui/VideoItem";
import { useHomeStore } from "../../store/homStore";
import { axiosInstance } from "../../api/axios";
import { useEffect, useRef } from "react";
import Loading from "../../components/common/Loading";

export default function HomeMainVideo() {
  let target = useRef(null);

  const queryClient = useQueryClient();
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

  console.log(data);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          queryClient.prefetchInfiniteQuery({
            queryKey: ["latest"],
            queryFn: fetchTrend,
            initialPageParam: 1,
            staleTime: 60000,
          }),
          queryClient.prefetchInfiniteQuery({
            queryKey: ["movie"],
            queryFn: fetchTrend,
            initialPageParam: 1,
            staleTime: 60000,
          }),
          queryClient.prefetchInfiniteQuery({
            queryKey: ["tv"],
            queryFn: fetchTrend,
            initialPageParam: 1,
            staleTime: 60000,
          }),
        ]);
      } catch (error) {
        console.error("Error prefetching data:", error);
      }
    };
    fetchData();
  }, []);

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
        <div ref={target}>{isFetchingNextPage && <Loading />}</div>
      </section>
    </>
  );
}
