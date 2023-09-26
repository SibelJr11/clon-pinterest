import { create } from "zustand";

export const useBookStore = create((set) => ({
      value: "dog",
      updateValue: (newValue) => set((state) => ({ value: newValue })),
}));
