import {IUserPayload} from "../types/CommonType";
import axios from "axios";
import {API} from "../config/url";

export const reservationMutation = (req: IUserPayload) => {
    return axios.post(API.USER.INFO, req);
}