import {IRes} from "../types";
import {ICommentsModel} from "../models";
import {axiosServiceJson} from "./axios.service.json";
import {urls} from "../constants";

const commentsApiService = {
    getAllComments: (): IRes<ICommentsModel[]> => {
        return axiosServiceJson.get(urls.comments);
    }
}

export {
    commentsApiService
}