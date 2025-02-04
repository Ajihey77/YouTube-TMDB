import { useState } from "react";

export default function CommentContent({ item }: { item: movieDetailComment }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const expanded = (() => {
    if (isExpanded) return item.content;
    if (!isExpanded && item.content.length > 200)
      return item.content.substring(0, 200) + "...";
    else {
      return item.content;
    }
  })();

  return (
    <div className="flex flex-col items-start">
      <p className="text-sm text-gray-700">{expanded}</p>
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
