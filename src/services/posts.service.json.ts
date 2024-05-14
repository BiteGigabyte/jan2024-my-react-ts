import {axiosServiceJson, IRes} from "./axios.service.json";
import {IPostModel} from "../models/IPostModel";
import {urls} from "../configs/urls";

const postService = {
    getAll: (): IRes<IPostModel[]> => axiosServiceJson.get(urls.posts),
    create: (post: IPostModel): IRes<IPostModel> => axiosServiceJson.post(urls.posts, post)
}

export {
    postService
}