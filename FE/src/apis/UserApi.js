import { API_ENDPOINT } from "../constants"
import RestAPI from "./RestAPI"

export const UserApi = {
    activeUser: async (query) => {
        return await RestAPI.get(API_ENDPOINT.user +"?" + query)
    },
    addUser: async (data) => {
        return await RestAPI.post(API_ENDPOINT.user, data)
    }
}