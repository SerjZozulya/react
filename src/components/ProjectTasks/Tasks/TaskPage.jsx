import { useParams } from "react-router-dom"

const TaskPage = ({posts}) => {

    const params = useParams()
    const task = posts.tasks.find((element) => element.type + '-' + element.id === params.id)
    console.log(task)

    return (
        <div>
            <h1>{params.id}</h1>
            <h2>{task.todo}</h2>
            <h3>Создан: {task.pubDate}</h3>
        </div>
    )
}

export default TaskPage