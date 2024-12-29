export default function Header() {
  return (
    <nav className="flex justify-between gap-x-44  h-14 px-4 mx-4">
      {/* 메뉴 로고 */}
      <div id="start" className="flex justify-items-center">
        <button className=" flex-1 bg-[url('./hamburger.svg')] bg-no-repeat bg-center aspect-square"></button>
        <button className="flex-[2] bg-[url('./logo.svg')]  bg-no-repeat bg-center aspect-video mx-3"></button>
      </div>
      {/* 검색 */}
      <div id="center" className="flex-[0_1_732px] flex items-center">
        {/* 검색폼  */}
        <form className="flex-1">
          <div className="flex border border-[#d5d5d5] rounded-l-[40px] py-2">
            <div className="flex justify-between w-full h-6">
              <div className="ml-4">
                <input className="" placeholder="검색" />
              </div>
              <div className="mr-2">
                <button className="bg-[url('./tia.png')] bg-no-repeat bg-center aspect-video w-[20px]"></button>
              </div>
            </div>
          </div>
        </form>
        {/* 검색 버튼 */}
        <button
          className="w-16 h-[42px] border border-l-0 border-[#d5d5d5] rounded-r-[40px] bg-[#f8f8f8]
          bg-[url('./search.svg')] bg-no-repeat bg-center"
        ></button>
        {/* 음성검색 버튼 */}
        <div className="ml-3">
          <div className="flex justify-center items-center bg-[#f2f2f2] rounded-full w-10 h-10">
            <button className="w-6 h-6 bg-[url('./mic.svg')] bg-no-repeat bg-center"></button>
          </div>
        </div>
      </div>
      <div id="end" className="flex justify-items-center">
        <button className="bg-[url('./right1.svg')] bg-no-repeat bg-center aspect-square "></button>
        <button className="bg-[url('./right2.svg')] bg-no-repeat bg-center aspect-square "></button>
        <button className="bg-[url('./right2.svg')] bg-no-repeat bg-center aspect-square"></button>
      </div>
    </nav>
  );
}
