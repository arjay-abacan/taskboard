import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { fetchTasks } from '../api.js'
import EmptyMessage from '../components/EmptyMessage.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import LoadingMessage from '../components/LoadingMessage.jsx'
import StatCard from '../components/StatCard.jsx'
import TaskList from '../components/TaskList.jsx'

function HomePage() {
  // Same query key as the Tasks page, so both pages share one cached copy.
  const {
    data: tasks,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  })

  if (isLoading) return <LoadingMessage text="Loading your summary..." />
  if (isError) {
    return <ErrorMessage message={error.message} onRetry={refetch} />
  }
  if (tasks.length === 0) {
    return (
      <EmptyMessage
        title="No tasks yet"
        message="When tasks are added, a summary will show up here."
      />
    )
  }

  const doneCount = tasks.filter((task) => task.completed).length
  const openCount = tasks.length - doneCount
  const percentDone = Math.round((doneCount / tasks.length) * 100)
  const nextTasks = tasks.filter((task) => !task.completed).slice(0, 5)

  return (
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Home</h1>
          <p className="mt-1 text-slate-600">Your tasks at a glance.</p>
        </div>
        <Link
          to="/tasks"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-500"
        >
          Browse all tasks
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard label="Total" value={tasks.length} />
        <StatCard label="Done" value={doneCount} />
        <StatCard label="Open" value={openCount} />
        <StatCard label="Complete" value={`${percentDone}%`} />
      </div>

      <h2 className="mt-10 text-xl font-semibold">Up next</h2>
      <div className="mt-4">
        {nextTasks.length === 0 ? (
          <EmptyMessage title="All done" message="Every task is complete." />
        ) : (
          <TaskList tasks={nextTasks} />
        )}
      </div>
    </section>
  )
}

export default HomePage
