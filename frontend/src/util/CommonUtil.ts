import axios from "axios";

export const parseTimeForToday = (target: Date) => {
    let result: string;

    const startDate = new Date(target)
    const endDate = new Date()

    const minDuration = Math.floor((endDate.getTime() - startDate.getTime()) / 1000 / 60)

    let hours = Math.floor(minDuration / 60)
    let min = Math.floor(minDuration % 60)

    if (min < 1) {
        result = `방금 전`
    } else if (hours < 6) {
        if (hours === 0) {
            result = `${min}분 전`
        } else {
            result = `${hours}시간 ${min}분 전`
        }
    } else if (6 < hours) {
        // 글을 올린 시간이 360분(6시간) 이상이면서 같은 날일 경우
        //  :  HH:mm (24시간 체계를 이용하여 글을 올린 시간 출력 ex) 08:38분 )
        // if (startDtm.get('date') === endDtm.get('date')) {
        if (startDate.getDate() === endDate.getDate()) {
            const hour: string = target.getHours().toString()
            const minutes: string = target.getMinutes().toString()
            const resHour = hour.length < 2 ? "0" + hour : hour
            const resMin = minutes.length < 2 ? "0" + minutes : minutes
            result = `${resHour}:${resMin}`
        } else {
            const year = target.getFullYear()
            const month = target.getMonth()
            const day = target.getDate()
            result = `${year}년 ${month}월 ${day}일`
        }
    }
    return result
}

export class Api {
    private readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    async get(params?: { [index: string]: string }) {
        const {data} = await axios.get(this.url, {params});
        return data;
    }

    async post(params?: { [index: string]: string }) {
        const {data} = await axios.post(this.url, {...params});
        return data;
    }
    
}
