import { $authHost, $host } from "./index";
import { ITask } from "../models/ITask";

export const fetchProjects = async () => {
    const {data} = await $host.get('api/projects')
    return JSON.parse(data)
}

export const createTask = async (task: ITask) => {
    const {data} = await $host.post('api/tasks', task)
    return JSON.parse(data)
};

export const editTask = async (task: ITask) => {
    const {data} = await $host.patch('api/tasks', task)
    return JSON.parse(data)
};

export const deleteTaskFromServer = async (id: number) => {
    const {data} = await $host.delete('api/tasks', {data: {id}})
    return JSON.parse(data)
};

export const fetchTasks = async (projectId: number) => {
    const {data} = await $host.get('api/tasks', {params: {projectId}})
    return JSON.parse(data)
}