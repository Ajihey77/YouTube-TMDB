import { useState } from "react";

export default function CommentContent({ item }: { item: movieDetailComment }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  console.log(isExpanded);
  return (
    <div className="flex flex-col items-start">
      <p className="text-sm text-gray-700">
        {isExpanded
          ? item.content
          : item.content.length > 200
          ? item.content.substring(0, 200) + "..."
          : item.content}
      </p>
      {item.content.length > 200 && (
        <button
          id={item.id}
          className="text-blue-500 text-sm mt-2"
          onClick={() => setIsExpanded((pre) => !pre)}
        >
          {isExpanded ? "간략히" : "자세히 보기"}
        </button>
      )}
    </div>
  );
}
