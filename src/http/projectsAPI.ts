import { $host } from "./index";
import { IProject } from "../models/IProject";
import { jwtDecode } from "jwt-decode";
import { IUser } from "../models/IUser";

export const createProject = async (project: IProject) => {
    const userId = jwtDecode<IUser>(localStorage.getItem("token") || "")
    const {data} = await $host.post('api/projects', {
        title: project.title,
        description: project.description,
        userId: userId.id
    })
    return JSON.parse(data)
};

export const editProject = async (project: IProject) => {
    const {data} = await $host.patch('api/projects', project)
    return JSON.parse(data)
};