function EmptyMessage({ title, message }) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-slate-600">{message}</p>
      </div>
    )
  }
  
  export default EmptyMessage
  