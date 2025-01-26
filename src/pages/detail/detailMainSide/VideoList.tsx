import { useEffect, useRef } from "react";
import IframVIdeo from "../../../components/common/IframVIdeo";
import { axiosInstance } from "../../../api/axios";
import { useParams } from "react-router";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "../../../components/common/Loading";

export default function VideoList() {
  const target = useRef(null);
  const { id, category } = useParams<{
    id: string;
    category: "movie" | "tv";
  }>();

  const videoItem = async ({ pageParam = 0 }): Promise<videoResult> => {
    const response = await axiosInstance.get(`/${category}/${id}/videos`);
    const itemsPerPage = 5;
    const start = pageParam * itemsPerPage;
    const end = start + itemsPerPage;
    const slicedItems = response.data.results.slice(start, end);

    return {
      items: slicedItems,
      hasNextPage: end < response.data.results.length,
      nextPage: pageParam + 1,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["video", id],
      queryFn: videoItem,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        return lastPage.hasNextPage ? lastPage.nextPage : undefined;
      },
    });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
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
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      {data?.pages.map((video, pageIndex) => (
        <article className="flex flex-col gap-5 mt-7" key={pageIndex}>
          {video.items.map((val) => (
            <IframVIdeo
              videoKey={val.key || ""}
              width="315"
              height="179"
              key={val.id}
            />
          ))}
        </article>
      ))}
      {isFetchingNextPage && <Loading />}
      <div ref={target} style={{ height: "1px" }}></div>
    </>
  );
}
