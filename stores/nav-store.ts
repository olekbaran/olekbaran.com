import { create } from "zustand"

interface States {
  isContactSectionActive: boolean
}

interface Actions {
  setIsContactSectionActive: () => void
  setIsContactSectionInactive: () => void
}

export const useNavStore = create<States & Actions>((set) => ({
  isContactSectionActive: false,

  setIsContactSectionActive: () =>
    set(() => ({
      isContactSectionActive: true,
    })),
  setIsContactSectionInactive: () =>
    set(() => ({
      isContactSectionActive: false,
    })),
}))
