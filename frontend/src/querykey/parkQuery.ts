import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {IResponse} from "../types/CommonType";
import {Api} from "../util/CommonUtil";
import {API} from "../config/url";
import {QueryKeys} from "./queryKeys";

export const useParkQuery = (req: any): UseQueryResult<IResponse<any>> => {
    const api = new Api(API.RESERVATION.INFO)

    return useQuery({
        queryKey: [QueryKeys.USER, req],
        queryFn: () => api.get()
    })
}