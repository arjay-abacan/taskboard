const STATUS_OPTIONS = [
    {value : 'all', label : 'All'},
    {value : 'open', label : 'Open'},
    {value : 'done', label : 'Done'}
]

function TaskFilters({search, status, onSearchChange, onStatusChange}) {
    return(
        <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center">
            <label className="flex-1">
                <span className="sr-only">Search tasks</span>
                <input type="search" value={search} onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search task titles"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 
                focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                />
            </label>
            <div className="flex gap-2" role="group" aria-label="Filter by status">
                {STATUS_OPTIONS.map((option) => (
                    <button key={option.value}
                    type="button"
                    onClick={() => onStatusChange(option.value)}
                    aria-pressed={status === option.value}
                    className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium sm:flex-none ${
                        status === option.value ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default TaskFilters