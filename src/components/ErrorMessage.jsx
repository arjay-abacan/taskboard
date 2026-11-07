function ErrorMessage({ message, onRetry }) {
    return (
      <div
        role="alert"
        className="rounded-xl border border-red-200 bg-red-50 p-6 text-center"
      >
        <h2 className="font-semibold text-red-800">Something went wrong</h2>
        <p className="mt-1 text-sm text-red-700">{message}</p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500"
        >
          Try again
        </button>
      </div>
    )
  }
  
  export default ErrorMessage
  