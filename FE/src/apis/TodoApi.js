import { API_ENDPOINT } from "../constants"
import RestAPI from "./RestAPI"

export const TodoApi = {
    getList: async () => {
        return await RestAPI.get(API_ENDPOINT.list)
    },
    deleteList: async (id) => {
        return await RestAPI.delete(API_ENDPOINT.list + `/${id}`)
    },
    addList: async (data) => {
        return await RestAPI.post(API_ENDPOINT.list, data)
    }, 
    editList: async (id, data) => {
        return await RestAPI.put(API_ENDPOINT.list + `/${id}`, data)
    }
}