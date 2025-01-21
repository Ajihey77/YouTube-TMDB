import { useEffect } from "react";
import { useModalStore } from "../../store/modalStore";
import useDataFetcher from "../../hooks/useDataFetcher";
import ModalDim from "../ui/ModalDim";
import IframVIdeo from "./IframVIdeo";
import Loading from "./Loading";

export default function Modal() {
  const { videoId, mediaType, closeModal } = useModalStore();
  const { data, loading } = useDataFetcher<videoData>(
    `/${mediaType === "tv" ? "tv" : "movie"}/${videoId}/videos`
  );
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <ModalDim>
        {loading ? (
          <Loading />
        ) : (
          <div className="relative">
            <button
              className="absolute -right-9 -top-10 text-[20px] text-black bg-white w-8 h-8 rounded-md hover:bg-black hover:text-white"
              onClick={() => closeModal()}
            >
              X
            </button>
            {data?.results && data?.results.length > 0 ? (
              <IframVIdeo videoKey={data?.results[0].key} />
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
