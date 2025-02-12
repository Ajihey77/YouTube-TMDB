import { create } from "zustand";

type CategoryType = "trend" | "movie" | "tv" | "latest";

type HomeStore = {
  category: CategoryType;
  setCategory: (value: CategoryType) => void;
};

export const useHomeStore = create<HomeStore>((set) => ({
  category: "trend",
  setCategory: (value: CategoryType) => set({ category: value }),
}));
