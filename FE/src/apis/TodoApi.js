import { API_ENDPOINT } from "../constants"
import RestAPI from "./RestAPI"

export const TodoApi = {
    getList: async () => {
        return await RestAPI.get(API_ENDPOINT.list)
    }
}