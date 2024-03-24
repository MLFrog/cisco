import {IResponse, IUserPayload} from "../types/CommonType";
import {API} from "../config/url";
import axios from "axios";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {Api} from "../util/CommonUtil";
import {QueryKeys} from "./queryKeys";

export const useUserQuery = (req: any): UseQueryResult<IResponse<any>> => {
    const api = new Api(API.USER.INFO)

    return useQuery({
        queryKey: [QueryKeys.USER, req],
        queryFn: () => api.get()
    })
}