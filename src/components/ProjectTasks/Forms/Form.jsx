import { MODAL_TYPES } from "../../../utils/consts";
import CreateProject from "./CreateProject";
import CreateTask from "./CreateTask";
import EditTask from "./EditTask";

export default function Form({form}) {
    switch (form) {
        case MODAL_TYPES.CREATE_TASK_FORM: return <CreateTask/>;
        case MODAL_TYPES.EDIT_TASK_FORM: return <EditTask/>;
        case MODAL_TYPES.CREATE_PROJECT_FORM: return <CreateProject/>;
        default: return <></>
    }
}
