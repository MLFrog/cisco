export type TNavId = "reservation" | "report";
export type TSubTab = "welcome" | "area" | "datepicker" | "complete" | "fail";

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

export interface IParkArea {
    id: string,
    isPark: boolean
    isElect: boolean,
    isDisorder: boolean,
    parkHere?: string
}

export interface IPark {
    id: number;
    parkareaId: number;
    sensorId: string;
    parkedType: string;
    isParked: boolean;
    isReserved: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ISensor {
    airLabel: string;
    airValue: string;
    dustLabel: string;
    dustValue: string;
}