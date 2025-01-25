import { axiosInstance } from "../../api/axios";
import { useEffect, useRef, useState } from "react";
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

  const fetchTrend = async ({ pageParam = 1 }) => {
    const response = await axiosInstance.get(
      `${categoryData[category]}?page=${pageParam}`
    );
    return response.data;
  };

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<
    allList,
    Error,
    result,
    [string],
    number
  >({
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

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    setShowSkeleton(true);
    const timer = setTimeout(() => setShowSkeleton(false), 300);
    return () => clearTimeout(timer);
  }, [category]);

  return (
    <>
      <section className="flex-1 grid grid-cols-3 gap-y-10 pt-16">
        {showSkeleton
          ? Array.from({ length: 6 }).map((_, index) => (
              <VideoItemSkeleton key={index} />
            ))
          : data?.pages.map((data) =>
              data.results.map((item) => <VideoItem {...item} key={item.id} />)
            )}
        {isFetchingNextPage && <Loading />}
        <div ref={target} className="w-1 h-1"></div>
      </section>
    </>
  );
}
