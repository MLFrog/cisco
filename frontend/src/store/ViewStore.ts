import {create} from "zustand";
import {INavObj, IParkingInfo, TNavId} from "../types/CommonType";

interface IViewStore {
    // 현재 네비게이션 식별키
    navObj: INavObj,
    setNavObj: (arg: INavObj) => void;

    // 선택한 주차장 리스트 아이템
    activeInfo: IParkingInfo | null,
    setActiveInfo: (arg: IParkingInfo) => void;
}

const useViewStore = create<IViewStore>((set) => ({
    // 현재 네비게이션 식별키
    navObj: {navId: "reservation", subTab: "welcome"},
    setNavObj: (arg: INavObj) => set((state) => ({navObj: arg})),
    // 선택한 주차장 리스트 아이템
    activeInfo: null,
    setActiveInfo: (arg: IParkingInfo | null) => set((state) => ({activeInfo: arg})),

    
}));

export default useViewStore;