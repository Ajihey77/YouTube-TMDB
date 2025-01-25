export default function videoItemSkeleton() {
  return (
    <article className="flex flex-col mb-4 mx-2 animate-pulse">
      {/* 썸네일 */}
      <div className="relative w-full h-56 bg-gray-300 rounded-xl"></div>

      {/* 하단 정보 */}
      <div className="flex flex-row pt-3">
        {/* 인기도 */}
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-3 bg-gray-300 rounded-full"></div>
        </div>

        {/* 비디오 정보 */}
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </article>
  );
}
