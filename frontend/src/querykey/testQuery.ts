import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {IResponse} from "../types/CommonType";
import {AxiosError} from "axios";
import {Api} from "../util/CommonUtil";
import {API} from "../config/url";
import {QueryKeys} from "./queryKeys";

export const useTestQuery = (req: string): UseQueryResult<IResponse<any>> => {
    console.log("useTestQuery req ", req);
    console.log("useTestQuery url ", API.TEST);
    const api = new Api(API.TEST)
    console.log("api ", api)
    return useQuery({
        queryKey: [QueryKeys.TEST, req],
        queryFn: () => api.get({req: req}),
        // enabled: false,
    })
}
