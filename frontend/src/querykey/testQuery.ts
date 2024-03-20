import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {IResponse} from "../types/CommonType";
import {API} from "../config/url";
import {QueryKeys} from "./queryKeys";
import {Api} from "../util/CommonUtil";

export const useTestQuery = (req: string): UseQueryResult<IResponse<string>> => {

    const api = new Api(API.TEST)

    return useQuery({
        queryKey: [QueryKeys.TEST, req],
        queryFn: () => api.get({req: req}),
    })
}
