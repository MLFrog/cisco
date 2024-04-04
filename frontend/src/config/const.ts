import * as dayjs from 'dayjs';
import {IParkArea, IParkingInfo} from "../types/CommonType";

export const PARKING_AREA_LIST: IParkingInfo[] = [
    {
        id: "0",
        name: "판교세븐벤처밸리 A동 B1",
        parkingMaxLimit: "27",
        parkingCurrentValue: "10",
        address: "경기도 성남시 분당구 판교로228번길 15",
        operatingTime: "7:00~20:00 (주말,공휴일 휴무)"
    },
    {
        id: "1",
        name: "판교세븐벤처밸리 A동 B2",
        parkingMaxLimit: "27",
        parkingCurrentValue: "17",
        address: "경기도 성남시 분당구 판교로228번길 15판교로228번길 15",
        operatingTime: "7:00~20:00 (주말,공휴일 휴무)"
    },
    {
        id: "2",
        name: "붓다공용오피스 주차장",
        parkingMaxLimit: "120",
        parkingCurrentValue: "80",
        address: "경기도 성남시 분당구 판교로228번길 15",
        operatingTime: "24시간 연중무휴"
    },
]

export const PARKING_AREA_DATA_ROW_1: IParkArea[] = [
    {id: "01", isPark: true, isElect: false, isDisorder: false},
    {id: "02", isPark: false, isElect: false, isDisorder: false},
    {id: "03", isPark: true, isElect: false, isDisorder: false},
    {id: "04", isPark: true, isElect: false, isDisorder: false},
    {id: "05", isPark: false, isElect: false, isDisorder: false},
    {id: "06", isPark: true, isElect: false, isDisorder: true},
    {id: "07", isPark: false, isElect: true, isDisorder: true},
    {id: "08", isPark: true, isElect: true, isDisorder: true},
]

export const PARKING_AREA_DATA_ROW_2: IParkArea[] = [
    {id: "01", isPark: true, isElect: false, isDisorder: false},
    {id: "02", isPark: false, isElect: false, isDisorder: false},
    {id: "03", isPark: true, isElect: false, isDisorder: false},
    {id: "04", isPark: false, isElect: false, isDisorder: false},
    {id: "05", isPark: true, isElect: false, isDisorder: false},
    {id: "06", isPark: true, isElect: false, isDisorder: false},
    {id: "07", isPark: false, isElect: false, isDisorder: false},
    {id: "08", isPark: false, isElect: true, isDisorder: false},
]


export const PARKING_AREA_DATA_ROW_3: IParkArea[] = [
    {id: "01", isPark: true, isElect: false, isDisorder: false},
    {id: "02", isPark: false, isElect: false, isDisorder: false},
    {id: "03", isPark: true, isElect: false, isDisorder: false},
    {id: "04", isPark: false, isElect: false, isDisorder: false, parkHere: "C-04"},
    {id: "05", isPark: true, isElect: false, isDisorder: false},
    {id: "06", isPark: true, isElect: false, isDisorder: true},
    {id: "07", isPark: false, isElect: false, isDisorder: true},
    {id: "08", isPark: false, isElect: true, isDisorder: true},
]

export const TIME = [
    {id: "00", label: "00:00", value: dayjs().hour(0).minute(0).second(0)},
    {id: "01", label: "01:00", value: dayjs().hour(1).minute(0).second(0)},
    {id: "02", label: "02:00", value: dayjs().hour(2).minute(0).second(0)},
    {id: "03", label: "03:00", value: dayjs().hour(3).minute(0).second(0)},
    {id: "04", label: "04:00", value: dayjs().hour(4).minute(0).second(0)},
    {id: "05", label: "05:00", value: dayjs().hour(5).minute(0).second(0)},
    {id: "06", label: "06:00", value: dayjs().hour(6).minute(0).second(0)},
    {id: "07", label: "07:00", value: dayjs().hour(7).minute(0).second(0)},
    {id: "08", label: "08:00", value: dayjs().hour(8).minute(0).second(0)},
    {id: "09", label: "09:00", value: dayjs().hour(9).minute(0).second(0)},
    {id: "10", label: "10:00", value: dayjs().hour(10).minute(0).second(0)},
    {id: "11", label: "11:00", value: dayjs().hour(11).minute(0).second(0)},
    {id: "12", label: "12:00", value: dayjs().hour(12).minute(0).second(0)},
    {id: "13", label: "13:00", value: dayjs().hour(13).minute(0).second(0)},
    {id: "14", label: "14:00", value: dayjs().hour(14).minute(0).second(0)},
    {id: "15", label: "15:00", value: dayjs().hour(15).minute(0).second(0)},
    {id: "16", label: "16:00", value: dayjs().hour(16).minute(0).second(0)},
    {id: "17", label: "17:00", value: dayjs().hour(17).minute(0).second(0)},
    {id: "18", label: "18:00", value: dayjs().hour(18).minute(0).second(0)},
    {id: "19", label: "19:00", value: dayjs().hour(19).minute(0).second(0)},
    {id: "20", label: "20:00", value: dayjs().hour(20).minute(0).second(0)},
    {id: "21", label: "21:00", value: dayjs().hour(21).minute(0).second(0)},
    {id: "22", label: "22:00", value: dayjs().hour(22).minute(0).second(0)},
    {id: "23", label: "23:00", value: dayjs().hour(23).minute(0).second(0)},
]

export const PROGRESS_PAGE = ["welcome", "area", "datepicker"]