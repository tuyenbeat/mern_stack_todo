import { API_ENDPOINT } from "../constants"
import RestAPI from "./RestAPI"

export const UserApi = {
    activeUser: async (url) => {
        return await RestAPI.get(url)
    }
}