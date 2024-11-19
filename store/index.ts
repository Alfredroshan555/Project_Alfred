import { create } from "zustand";

export interface UserState {
  count: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postDetails: any;
  incCount: () => void;
  setPostDetails: (data: unknown) => void;
}

// Zustand store
export const useUserStore = create((set) => ({
  count: 0,
  postDetails: {},
  incCount: () => set((state: UserState) => ({ count: state.count + 1 })),
  setPostDetails: (data: unknown) => set({ postDetails: data }),
}));
