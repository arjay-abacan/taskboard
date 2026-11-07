function AboutPage() {
    return (
      <section className="max-w-2xl">
        <h1 className="text-3xl font-bold">About TaskBoard</h1>
        <p className="mt-4 text-slate-700">
          TaskBoard is a small task manager. It loads tasks from the free
          JSONPlaceholder API and lets you search, filter and open each task.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Built with</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-700">
          <li>React and Vite</li>
          <li>React Router for the pages</li>
          <li>TanStack Query for loading data from the API</li>
          <li>Tailwind CSS for the styling</li>
        </ul>
      </section>
    )
  }
  
  export default AboutPage
  