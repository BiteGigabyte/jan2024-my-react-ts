import {axiosServiceJson} from "./axios.service.json";
import {urls} from "../constants";
import {IUserModel} from "../models";
import {IRes} from "../types";

const usersApiService = {
    getAllUsers: (): IRes<IUserModel[]> => {
        return axiosServiceJson.get(urls.users);
    },
    // getUserByUserId: async (userId: number): Promise<IRes<IUserModel>> => {
    //      return  await axiosServiceJson.get(`${urls.users}/${userId}`);
    // }
}

export {
    usersApiService
}