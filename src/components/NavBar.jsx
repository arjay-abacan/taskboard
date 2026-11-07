import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          TaskBoard
        </Link>
        <div className="flex gap-4 text-sm font-medium text-slate-600 sm:gap-6">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/tasks" className="hover:text-indigo-600">Tasks</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
