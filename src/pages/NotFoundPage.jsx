import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="py-16 text-center">
      <p className="text-sm font-semibold text-indigo-600">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600">
        Sorry, there is no page at this address.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
      >
        Go home
      </Link>
    </section>
  )
}

export default NotFoundPage
