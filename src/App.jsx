import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import TaskDetailPage from './pages/TaskDetailPage.jsx'
import TasksPage from './pages/TasksPage.jsx'

function App () {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900"><NavBar />
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    </div>
  )
}

export default App
