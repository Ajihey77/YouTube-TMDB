import { create } from "zustand";

type HomeStore = {
  category: string;
  setCategory: (value: string) => void;
};

export const useHomeStore = create<HomeStore>((set) => ({
  category: "trend",
  setCategory: (value: string) => set({ category: value }),
}));
