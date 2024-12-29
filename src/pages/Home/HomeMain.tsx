import HomeMainNav from "./HomeMainNav";
import VideoThumbnail from "../../components/UI/VideoThumbnail";

export default function HomeMain() {
  return (
    <section className="flex flex-col w-full h-screen px-6">
      <HomeMainNav />
      <VideoThumbnail />
    </section>
  );
}
