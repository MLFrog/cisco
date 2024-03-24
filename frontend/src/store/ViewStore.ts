import {create} from "zustand";
import {TNavId} from "../types/CommonType";

interface IViewStore {
    // 현재 네비게이션 식별키
    navId: TNavId,
    setNavId: (arg: TNavId) => void;

}

const useViewStore = create<IViewStore>((set) => ({
    // 현재 네비게이션 식별키
    navId: "reservation",
    setNavId: (arg: TNavId) => set((state) => ({navId: arg})),

    
}));

export default useViewStore;