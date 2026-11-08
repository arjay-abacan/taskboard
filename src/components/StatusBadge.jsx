function StatusBadge({ completed }) {
    return (
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium 
            ${completed ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}
        > 
            {completed ? 'Done' : 'Open'}
        </span>
    )
}
export default StatusBadge