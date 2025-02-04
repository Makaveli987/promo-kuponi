import { PromoCode } from "@/models/PromoCode";
import { create } from "zustand";

// Define the types for dialog state
interface PromoCodeDialogState {
  isOpen: boolean;
  data: PromoCode | null; // Expand types as needed
  openDialog: (data?: PromoCode) => void;
  closeDialog: () => void;
}

// Create the Zustand store
export const usePromoCodeDialogStore = create<PromoCodeDialogState>((set) => ({
  isOpen: false,
  data: null,
  openDialog: (data?: PromoCode) => set({ isOpen: true, data }),
  closeDialog: () => set({ isOpen: false, data: null }),
}));
