import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge.jsx'

function TaskCard({ task }) {
    return (
        <Link to = {`/tasks/${task.id}`}
        className="flex items-center justify-between gap-4 rounded-xl border border-slate-200
         bg-white p-4 shadow-sm hover:border-indigo-300 hover:shadow-md">
            <div className="min-w-0">
                <p className="font-medium first-letter:uppercase">{task.title}</p>
                <p className="mt-1 text-xs text-slate-500">Task #{task.id}</p>
            </div>
            <StatusBadge completed={task.completed}/>
        </Link>
    )
}

export default TaskCard