import { useHomeStore } from "../../store/homStore";

export default function CategoryBtn({
  children,
  categoryData,
}: {
  categoryData: string;
  children: string;
}) {
  const { setCategory, category } = useHomeStore();
  return (
    <button
      className={`px-3 py-1 rounded-md ${
        category === categoryData
          ? "bg-black text-white"
          : "bg-[#f2f2f2] hover:bg-slate-200"
      }`}
      onClick={() => setCategory(categoryData)}
    >
      {children}
    </button>
  );
}
