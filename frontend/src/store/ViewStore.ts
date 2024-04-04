import {create} from "zustand";
import {INavObj, IParkingInfo, ISensor} from "../types/CommonType";

interface IViewStore {
    // 현재 네비게이션 식별키
    navObj: INavObj,
    setNavObj: (arg: INavObj) => void;

    // 선택한 주차장 리스트 아이템
    activeInfo: IParkingInfo | null,
    setActiveInfo: (arg: IParkingInfo) => void;

    sensorInfo: ISensor,
    setSensorInfo: (arg: ISensor) => void;
}

const useViewStore = create<IViewStore>((set) => ({
    // 현재 네비게이션 식별키
    navObj: {navId: "reservation", subTab: "welcome"},
    // navObj: {navId: "report", subTab: "fail"},
    setNavObj: (arg: INavObj) => set((state) => ({navObj: arg})),

    // 선택한 주차장 리스트 아이템
    activeInfo: null,
    setActiveInfo: (arg: IParkingInfo | null) => set((state) => ({activeInfo: arg})),

    // 선택한 주차장 센서 정보
    sensorInfo: null,
    setSensorInfo: (arg: ISensor | null) => set((state) => ({sensorInfo: arg})),
}));

export default useViewStore;