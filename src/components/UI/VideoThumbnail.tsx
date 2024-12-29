import useDataFetcher from "../../hooks/useDataFetcher";

type trendData = {
  results: {
    backdrop_path: string;
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
  }[];
};

export default function VideoThumbnail() {
  const { data, loading } = useDataFetcher<trendData>("/trending/all/day");
  console.log(data?.results, loading);
  type constent = {
    [key: string]: {
      [key: string]: string;
    };
  };
  const contents: constent = {
    1: {
      img1: "https://i.ytimg.com/vi/5PTF0nstae0/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAArgIigIMCAAQARgTIDIofzAP&rs=AOn4CLAeSR228h8pT3s_O3dQE1u9-LvY3A",
      img2: "https://yt3.ggpht.com/vqI4II973xnnKbtfF3Sra44aMYj97g7DYEADV9fsKK67NTnO0iwS8Q-yOKV_0e3LIaNeAKGoKmI=s68-c-k-c0x00ffffff-no-rj",
      title: "모든 앱 50% 할인",
      user: "구매 첫해 특가! 기회는 12월 8일까지",
      etc: "스폰서 · Adobe Creative Cloud Media",
    },
    2: {
      img1: "https://i.ytimg.com/vi/bWTsOPinMGs/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID8oMzAP&amp;rs=AOn4CLB4fo9-sVeeYUGyn-IJQrtx6cF1NA",
      img2: "https://yt3.ggpht.com/YHUseBu9h6CFiuz-R9_IGmoJvRFIQ7c-PJkSQxMcsGGdhU8ZuImuat70bI3EwaBwI-lvln7B2Dk=s88-c-k-c0x00ffffff-no-rj",
      title: "christmas.",
      user: "ggg.",
      etc: "조회수 1.6만회 · 1일 전",
    },
    3: {
      img1: "https://i.ytimg.com/vi/-V_aZpqTXdE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBNKYrQaIeHP7DYqCYWbif5ShuoQ",
      img2: "https://yt3.ggpht.com/aOgjye3sMIxNl2SW2wAQZpZWUXzZ5Rg0rNITacRQKVfXvF9cnPWb77G3_gH5s2Zyw241BXWYWg=s68-c-k-c0x00ffffff-no-rj",
      title:
        "사탄 들려버린 노어플 적응기, 그것 또한 낭만 | 풍향고 EP.2 베트남 하노이 & 사파행 슬리핑 기차 #유재석 #황정민 #지석진 #양세찬",
      user: "뜬뜬 DdeunDdeun.",
      etc: "조회수 1.6만회 · 1일 전",
    },
    4: {
      img1: "https://i.ytimg.com/vi/H18Yh-oTOEs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA17FNM4BJWta62CtxyHjFb6qb_Pg",
      img2: "https://yt3.ggpht.com/TPCE1SnSptc_EfPnnZZO2W52j_DeKXl1vjDHv635-8Snv7zsOA9pVxisravSZfKgN4K-xrcYUiQ=s88-c-k-c0x00ffffff-no-rj",
      title: "재즈 힙합 Lo-fi 비 ☂️ 비가 없으면 무지개도 없다.",
      user: "칠 칠 저널 - chill chill journal.",
      etc: "조회수 1.6만회 · 1일 전",
    },
    5: {
      img1: "https://i.ytimg.com/vi/wIBnaNuhuCQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB30i9TxTAKW2UCWpnGdGzUCEZXXg",
      img2: "https://yt3.ggpht.com/eEOr3B06Esjt-LayZC-NbGJtfpSzxwPZvQNPG2UBnRU-gEEsfkSW4WkDgShM6INX12A25jKHuKQ=s68-c-k-c0x00ffffff-no-rj",
      title: "ASMR 뉴욕 로스쿨 도서관 (feat.시험•고시•논문•재택)",
      user: "몽상욕조 asmr.",
      etc: "조회수 1.6만회 · 1일 전",
    },
    6: {
      img1: "https://i.ytimg.com/vi/DxFQfmdk8Ug/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRsBNWt3Twa7C91ngKifoJKsLhNQ",
      img2: "https://yt3.ggpht.com/zSR6bVkf9mkmyw4r1pwd05J87vWoCNcqV0Kh7YZI1RcfSurp0IpYykZLdQDrhyon2gXB6vAwKA=s68-c-k-c0x00ffffff-no-rj",
      title: "(wth.) just a cake ~ calm lofi music.",
      user: "whattheheck?.",
      etc: "조회수 1.6만회 · 1일 전",
    },
  };

  return (
    <section className="flex-1 grid grid-cols-3  gap-y-10 pt-6">
      {Object.values(contents).map((value) => (
        <article className="flex flex-col mb-4 mx-2">
          {/* 썸네일 */}
          <img className="rounded-xl" src={value.img1} />
          {/* 하단 정보 */}
          <div className="flex flex-row pt-3">
            {/* 프로필 사진 */}
            <div className="w-9 h-9 mr-3">
              <img className="rounded-full" src={value.img2} />
            </div>
            {/* 프로필 정보 */}
            <div>
              <div>
                <span className="font-bold">{value.title}</span>
              </div>
              <div>
                <span className="text-[#848484]">{value.user}</span>
              </div>
              <div>
                <span className="text-[#848484]">{value.etc}</span>
              </div>
            </div>
            {/* 점 버튼 */}
            <div className="ml-auto">
              <button className="w-6 h-6 bg-[url('./dot.svg')] bg-no-repeat bg-center aspect-square"></button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
