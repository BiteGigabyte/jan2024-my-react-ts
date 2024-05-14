import axios, {AxiosResponse} from "axios";
import {baseURL} from "../configs/urls";


type IRes<T> = Promise<AxiosResponse<T>>;
const axiosServiceJson = axios.create({
    baseURL: baseURL,
    headers: {'content-type': 'application/json; charset=UTF-8'}
});


export {
    axiosServiceJson
}

export type {
    IRes
}