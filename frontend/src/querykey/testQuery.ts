import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {IResponse} from "../types/CommonType";
import {Api} from "../util/CommonUtil";
import {API} from "../config/url";
import {QueryKeys} from "./queryKeys";

export const useTestQuery = (req: string): UseQueryResult<IResponse<any>> => {

    const api = new Api(API.TEST)

    return useQuery({
        queryKey: [QueryKeys.TEST, req],
        queryFn: () => api.get({req: req}),
        // enabled: false,
    })
}
