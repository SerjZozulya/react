import axios from "axios";

export const tasksAPI = {
    getProjects() {
        return axios.get("http://localhost:8080/api/getProjects")
            .then(response => {
                return response.data
            })
    },

    getTasks(id) {
        return axios.get(`http://localhost:8080/api/getTasks/${id}`)
            .then(response => {
                return response.data
            })
    },

    addTask(newTask) {
        return axios.post("http://localhost:8080/api/addTask", newTask)
            .then(response => {
                return response.data
            })
    },

    deleteTask(id) {
        return axios.post("http://localhost:8080/api/delTask", {id: id})
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