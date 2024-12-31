import { create } from "zustand";

type modalStore = {
  modal: boolean;
  videoId: number;
  mediaType: string;
  setId: (id: number) => void;
  setMediaType: (id: string) => void;
  openModal: () => void;
  closeModal: () => void;
};

export const useModalStore = create<modalStore>((set) => ({
  videoId: 0,
  mediaType: "",
  modal: false,
  setId: (id: number) => set({ videoId: id }),
  setMediaType: (type: string) => set({ mediaType: type }),
  openModal: () => set({ modal: true }),
  closeModal: () => set({ modal: false }),
}));
