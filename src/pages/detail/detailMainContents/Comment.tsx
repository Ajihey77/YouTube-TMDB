import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import CommentContent from "./CommentContent";
import useQueryFetcher from "../../../hooks/useQueryFetcher";

export default function Comment() {
  const { id, category } = useParams<{
    id: string;
    category: "movie" | "tv";
  }>();

  const { isLoading, data } = useQuery<movieDetailCommentList, Error>({
    queryKey: [category, id, "reviews"],
    queryFn: () => useQueryFetcher(`/${category}/${id}/reviews`),
  });
  return (
    <>
      <span className="text-2xl font-extrabold">
        댓글 {data?.results.length || 0}개
      </span>
      <div className="flex flex-col gap-4 mb-14">
        {data?.results.length && data?.results.length > 0 ? (
          data?.results.map((item) => (
            <div className="flex space-x-3" key={item.id}>
              <img
                className="rounded-full w-14 h-14 object-cover"
                src={
                  item.author_details.avatar_path
                    ? `https://image.tmdb.org/t/p/w500${item.author_details.avatar_path}`
                    : "/default_profile.png"
                }
                alt={`${item.author}'s avatar`}
              />
              <div className="flex flex-col gap-1 pr-10 ">
                <div>
                  <span className="font-semibold mr-2">@{item.author}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                </div>
                <CommentContent item={item} />
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center w-full h-32 mb-10 rounded-lg bg-[#F2F2F2]">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-400 mx-auto mb-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 10h8M8 14h4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <p className="text-sm text-gray-500 mt-3">댓글이 없습니다.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
