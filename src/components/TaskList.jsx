import TaskCard from './TaskCard.jsx'

function TaskList({ tasks }) {
    return(
        <ul className="space-y-3">
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskCard task={task} />
                </li>
            ))}

        </ul>
    )
}
export default TaskList