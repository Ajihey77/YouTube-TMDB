import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const navigate = useNavigate();
  const [keyWord, setKeyWord] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?results=${keyWord}`);
  };
  return (
    <div id="center" className="flex-[0_1_732px] flex items-center z-10">
      {/* 검색폼  */}
      <form className="flex w-full" onSubmit={handleSubmit}>
        <div className="flex border border-[#d5d5d5] rounded-l-[40px] py-2 w-full">
          <div className="flex justify-between w-full h-6">
            <div className="ml-4">
              <input
                className="w-[500px]"
                placeholder="검색"
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
              />
            </div>
            <div className="mr-2">
              <button className="bg-[url('/tia.png')] bg-no-repeat bg-center aspect-video w-[20px]"></button>
            </div>
          </div>
        </div>
        {/* 검색 버튼 */}
        <button
          className="w-16 h-[42px] border border-l-0 border-[#d5d5d5] rounded-r-[40px] bg-[#f8f8f8]
        bg-[url('/search.svg')] bg-no-repeat bg-center"
          type="submit"
        ></button>
      </form>
      {/* 음성검색 버튼 */}
      <div className="ml-3">
        <div className="flex justify-center items-center bg-[#f2f2f2] rounded-full w-10 h-10">
          <button className="w-6 h-6 bg-[url('/mic.svg')] bg-no-repeat bg-center"></button>
        </div>
      </div>
    </div>
  );
}
