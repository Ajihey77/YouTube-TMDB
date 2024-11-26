import { useParams } from "react-router";
import useDataFetcher from "../../../hooks/useDataFetcher";
import CommentContent from "./CommentContent";

export default function Comment() {
  const { id } = useParams();
  const { data, loading } = useDataFetcher<movieDetailCommentList>(
    `/movie/${id}/reviews`
  );
  return (
    <>
      <span className="text-2xl font-extrabold">
        댓글 {data?.results.length}개
      </span>
      <div className="flex flex-col gap-4">
        {data?.results.map((item) => (
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
            <div className="flex flex-col gap-1 pr-10">
              <div>
                <span className="font-semibold mr-2">@{item.author}</span>
                <span className="text-sm text-gray-500">
                  {new Date(item.created_at).toLocaleDateString()}
                </span>
              </div>
              <CommentContent item={item} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
