import { Link, useParams } from 'react-router-dom'

function TaskDetailPage() {
  // The :id part of the URL, always as a string. For /tasks/5 it is "5".
  const { id } = useParams()

  return (
    <section>
      <Link
        to="/tasks"
        className="text-sm font-medium text-indigo-600 hover:underline"
      >
        ← Back to tasks
      </Link>
      <h1 className="mt-4 text-3xl font-bold">Task {id}</h1>
      <p className="mt-2 text-slate-600">
        The details of task {id} will go here.
      </p>
    </section>
  )
}

export default TaskDetailPage
