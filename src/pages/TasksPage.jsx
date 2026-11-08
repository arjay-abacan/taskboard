import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { fetchTasks } from '../api.js'
import EmptyMessage from '../components/EmptyMessage.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import LoadingMessage from '../components/LoadingMessage.jsx'
import TaskList from '../components/TaskList.jsx'
import TaskFilters from '../components/TaskFilters.jsx'

function matchesStatus(task, status) {
    if (status === 'done') return task.completed
    if (status === 'open') return !task.completed
    return true
}

function TasksPage() {
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('all')

    const {data: tasks, isLoading, isError, error, refetch} = useQuery({queryKey:['tasks'],queryFn: fetchTasks}) 

    function clearFilters() {
        setSearch('')
        setStatus('all')
    }

    if (isLoading) return <LoadingMessage text="Loading tasks..."/>
    if (isError) {return <ErrorMessage message={error.message} onRetry={refetch} />}
    if (tasks.length === 0) {
        return (<EmptyMessage 
            title="No tasks yet"
            message="When tasks are added, they will show up here"/>)
    }
    
    const searchText = search.trim().toLowerCase()
    const filteredTasks = tasks.filter(
        (task) => task.title.toLowerCase().includes(searchText) && matchesStatus(task, status),
    )
    const hasFilters = search !== '' || status !== 'all'

return (
    <section>
        <h1 className="text-3xl font-bold">Tasks</h1>
        <p className="mt-1 text-slate-600">Search, filter and open any task.</p>
        <div className="mt-6">
            <TaskFilters 
            search={search}
            status={status}
            onSearchChange={setSearch}
            onStatusChange={setStatus}
            />
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
            <p>Showing {filteredTasks.length} of {tasks.length} tasks</p>
            {hasFilters && (
                <button
                    type="button"
                    onClick={clearFilters}
                    className="font-medium text-indigo-600 hover:underline" 
                    >
                        Clear filters
                </button>
            )}
        </div>
        <div className="mt-4">
            {filteredTasks.length === 0 ? (
                <EmptyMessage
                title="No matching tasks"
                message="Try a different search or status, or clear the filters." />
            ) : (
                <TaskList tasks={filteredTasks} />
            )}
        </div>
    </section>
)

}
export default TasksPage
