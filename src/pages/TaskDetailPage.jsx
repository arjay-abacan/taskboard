import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchTask } from '../api.js'
import ErrorMessage from '../components/ErrorMessage.jsx'
import LoadingMessage from '../components/LoadingMessage.jsx'
import OwnerInfo from '../components/OwnerInfo.jsx'
import StatusBadge from '../components/StatusBadge.jsx'

function TaskDetailPage() {
  // The :id part of the URL, always as a string. For /tasks/5 it is "5".
  const { id } = useParams()

  const {
    data: task, isLoading, isError, error, refetch
  } = useQuery({
    // The id is part of the key, so each task gets its own cache entry.
    queryKey: ['task', id],
    queryFn: () => fetchTask(id),
  })

  if (isLoading) return <LoadingMessage text="Loading task..." />
  if (isError) {
    return <ErrorMessage message={error.message} onRetry={refetch} />
  }

  return (
    <section>
      <Link
        to="/tasks"
        className="text-sm font-medium text-indigo-600 hover:underline"
      >
        ← Back to tasks
      </Link>

      <div className="mt-4 grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">Task #{task.id}</span>
            <StatusBadge completed={task.completed} />
          </div>
          <h1 className="mt-3 text-2xl font-bold first-letter:uppercase sm:text-3xl">
            {task.title}
          </h1>
          <p className="mt-4 text-slate-600">
            {task.completed
              ? 'This task is complete.'
              : 'This task is still open.'}
          </p>
        </article>

        <OwnerInfo userId={task.userId} />
      </div>
    </section>
  )
}

export default TaskDetailPage
