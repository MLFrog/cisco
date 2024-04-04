import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {ISensor} from "../types/CommonType";
import {API} from "../config/url";
import {QueryKeys} from "./queryKeys";
import axios from "axios";

export const useSensorQuery = (req: number): UseQueryResult<ISensor> => {
    return useQuery({
        queryKey: [QueryKeys.SENSOR.INFO, req],
        queryFn: () => axios.get(API.SENSOR.INFO, {params: {sensorId: req}}).then(res => res.data),
    })
}