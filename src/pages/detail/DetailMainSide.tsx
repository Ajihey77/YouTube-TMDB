import ContentsInfo from "./detailMainSide/ContentsInfo";
import VideoList from "./detailMainSide/VideoList";

export default function DetailMainSide({
  dstailItem,
}: {
  dstailItem: movieDetail | tvDetail;
}) {
  return (
    <section className="ml-5 mr-10">
      <ContentsInfo {...dstailItem} />
      <VideoList />
    </section>
  );
}
