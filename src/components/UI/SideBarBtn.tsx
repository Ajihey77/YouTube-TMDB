import { Link } from "react-router";

export default function SideBarBtn({
  img,
  title,
  link,
}: {
  img: string;
  title: string;
  link: string;
}) {
  return (
    <Link to={link}>
      <div className="flex flex-row p-3">
        <div
          className={`w-6 h-6 mr-6 bg-no-repeat bg-center aspect-square`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div>{title}</div>
      </div>
    </Link>
  );
}
