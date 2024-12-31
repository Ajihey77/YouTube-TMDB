import HomeMainNav from "./HomeMainNav";
import HomeMainVideo from "./HomeMainVideo";

export default function HomeMain() {
  return (
    <>
      <section className="flex flex-col w-full h-screen px-6">
        <HomeMainNav />
        <HomeMainVideo />
      </section>
    </>
  );
}
