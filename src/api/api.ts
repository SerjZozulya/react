import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/api/"
})

export const tasksAPI = {
    getProjects() {
        return instance.get("getProjects")
            .then(response => {
                return response.data
            })
    },

    getTasks(id: number) {
        return instance.get("getTasks/" + id)
            .then(response => {
                return response.data
            })
    },

    addTask(newTask: any) {
        return instance.post("addTask", newTask)
            .then(response => {
                return response.data
            })
    },

    deleteTask(id: number) {
        return instance.post("delTask", {id: id})
            .then(response => {
            return response.data
        })
    }

}

export const userAPI = {
    getUserData() {
        return axios.get("http://localhost:8080/auth/me")
            .then(response => {
                return response.data
            })
    }
}