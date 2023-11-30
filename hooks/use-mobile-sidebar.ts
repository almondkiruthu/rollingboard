import { create } from "zustand";

interface MobileSidebarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set((store) => ({ isOpen: true })),
  onClose: () => set((store) => ({ isOpen: true })),
}));
