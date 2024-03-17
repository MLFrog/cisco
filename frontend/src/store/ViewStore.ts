import {create} from "zustand";

interface IViewStore {
    // 현재 네비게이션 식별키
    navId: string,
    setNavId: (arg: string) => void;

}

const useViewStore = create<IViewStore>((set) => ({
    // 현재 네비게이션 식별키
    navId: "main",
    setNavId: (arg: string) => set((state) => ({navId: arg})),

    
}));

export default useViewStore;