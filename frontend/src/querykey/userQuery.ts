import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {IResponse} from "../types/CommonType";
import {AxiosError} from "axios";
import {Api} from "../util/CommonUtil";
import {API} from "../config/url";
import {QueryKeys} from "./queryKeys";


export const useUserQuery = (req: any): UseQueryResult<IResponse<any>, AxiosError> => {
    const api = new Api(API.USER.INFO)

    return useQuery({
        queryKey: [QueryKeys.USER, req],
        queryFn: () => api.get()
    })
}