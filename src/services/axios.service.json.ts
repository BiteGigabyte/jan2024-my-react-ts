import axios from "axios";

import {baseURL} from "../constants";

let axiosServiceJson = axios.create({
   baseURL: baseURL,
   headers: {'content-type': 'application/json; charset=UTF-8'}
});

export {axiosServiceJson};