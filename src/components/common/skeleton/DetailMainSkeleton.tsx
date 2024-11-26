export default function DetailMainSkeleton() {
  return (
    <div className="flex w-full animate-pulse">
      <div className="flex flex-col">
        <div className="rounded-lg bg-gray-300 w-[915px] h-[515px]"></div>
        <div className="mt-4 bg-gray-300 h-5 w-2/3 rounded"></div>
        <div className="mt-2 bg-gray-300 h-5 w-1/4 rounded"></div>
      </div>

      <section className="ml-5 mr-10 flex flex-col gap-5">
        <article className="flex flex-col border-gray-200 border rounded-xl p-5">
          <div className="h-5 w-1/3 bg-gray-300 rounded"></div>
          <div className="flex mt-8 gap-4">
            <div className="w-20 h-28 bg-gray-300 rounded-lg"></div>
            <div className="flex flex-col gap-2 w-full">
              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
              <div className="h-5 bg-gray-300 rounded w-1/2"></div>
              <div className="h-5 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </article>
        <article className="flex flex-col gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-300 w-[315px] h-[179px]"
            ></div>
          ))}
        </article>
      </section>
    </div>
  );
}
