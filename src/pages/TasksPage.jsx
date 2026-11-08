import { useQuery } from '@tanstack/react-query'
import { fetchTasks } from '../api.js'
import EmptyMessage from '../components/EmptyMessage.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import LoadingMessage from '../components/LoadingMessage.jsx'
import TaskList from '../components/TaskList.jsx'

function TasksPage() {
    const {data: tasks, isLoading, isError, error, refetch} = useQuery({queryKey:['tasks'],queryFn: fetchTasks}) 
    if (isLoading) return <LoadingMessage text="Loading tasks..."/>
    if (isError) {return <ErrorMessage message={error.message} onRetry={refetch}/>}
    if (tasks.length === 0) {
        return (<EmptyMessage 
            title="No tasks yet"
            message="When tasks are added, they will show up here"/>)
    }   
return (
    <section>
        <h1 className="text-3xl font-bold">Tasks</h1>
        <p className="mt-1 text-slate-600">{tasks.length} tasks loaded</p>
        {/*
        <ul className="mt-6 list-disc space-y-1 pl-6">
            {tasks.map((task) => (
                <li key={task.id}> {task.title} </li>))}
        </ul>
        */}
        <div className="mt-6">
            <TaskList tasks={tasks} />
        </div>
    </section>
)

}
export default TasksPage
