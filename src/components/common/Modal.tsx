import { useEffect, useState } from "react";
import { useModalStore } from "../../store/modalStore";
import useDataFetcher from "../../hooks/useDataFetcher";
import ModalDim from "../UI/ModalDim";

export default function Modal() {
  const [isLoading, setIsLoading] = useState(true);
  const { videoId, mediaType, closeModal } = useModalStore();
  const { data, loading } = useDataFetcher<videoData>(
    `/${mediaType === "tv" ? "tv" : "movie"}/${videoId}/videos`
  );
  console.log(data?.results);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <ModalDim>
        {loading && isLoading ? (
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="relative">
            <button
              className="absolute -right-9 -top-10 text-[20px] text-black bg-white w-8 h-8 rounded-md hover:bg-black hover:text-white"
              onClick={() => closeModal()}
            >
              X
            </button>
            {data?.results && data?.results.length > 0 ? (
              <iframe
                width="915"
                height="515"
                src={`https://www.youtube.com/embed/${data?.results[0].key}?autoplay=1&mute=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                onLoad={() => setIsLoading(false)}
                allowFullScreen
              ></iframe>
            ) : (
              <div className="relative">
                <iframe
                  width="915"
                  height="515"
                  allowFullScreen
                  className="bg-black"
                ></iframe>
                <div className="text-white absolute top-0 text-3xl">
                  영상이 존재하지 않습니다.
                </div>
              </div>
            )}
          </div>
        )}
      </ModalDim>
    </>
  );
}
