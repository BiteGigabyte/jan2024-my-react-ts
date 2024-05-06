import axios, {AxiosResponse} from "axios";

import {UsersResponseModel} from "../models";
import {axiosServiceJson} from "./axios.service.json";

const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosServiceJson.get('/users');
}

export default getAllUsers;