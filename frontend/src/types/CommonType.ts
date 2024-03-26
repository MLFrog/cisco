export type TNavId = "reservation" | "report";
export type TSubTab = "welcome" | "area" | "datepicker" | "complete";

export interface INavObj {
    navId: TNavId;
    subTab: TSubTab;
}

export interface IResponse<T> {
    code: number;
    message: string;
    data: T
}

export interface IUser {
    name: string,
    id: string,
}

export interface IUserPayload {
    id: string,
    pw: string,
}

export interface IParkingInfo {
    id: string,
    name: string,
    parkingMaxLimit: string,
    parkingCurrentValue: string,
    address: string,
    operatingTime: string,
}