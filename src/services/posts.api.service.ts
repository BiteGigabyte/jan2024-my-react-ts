import axios, {AxiosResponse} from "axios";

import {IPostModel} from "../models";
import {axiosServiceJson} from "./axios.service.json";

const getAllPosts = (userId: number): Promise<AxiosResponse<IPostModel[]>> => {
    return axiosServiceJson.get('/posts/user/' + userId);
}

export default getAllPosts;