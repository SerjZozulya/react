import DialogsContainer from "../components/Dialogs/Dialogs-container";
import { Products } from "../components/Products/Products";
import TaskPage from "../components/ProjectTasks/Tasks/TaskPage";
import Tasks from "../components/ProjectTasks/Tasks/Tasks";

export const routes = [
    {path: '/project', component: Tasks, exact: true},
    {path: '/dialogs', component: DialogsContainer, exact: false},
    {path: '/products', component: Products, exact: true},
    {path: '/project/:id', component: TaskPage, exact: true}
]