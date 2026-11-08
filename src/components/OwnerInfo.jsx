import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api.js'

function OwnerInfo ({ userId }) {
    const { data: user, isLoading, isError } = useQuery({
        queryKey: ['user', userId],
        queryFn: () => fetchUser(userId),
    })

    return (
        <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold tracking-wide text-slate-500 uppercase">Owner</h2>
            {isLoading && (
                <p className="mt-3 text-sm text-slate-600">Loading owner...</p>
            )}
            {isError && (
                <p className="mt-3 text-sm text-red-700">Could not load owner.</p>
            )}
            {user && (
                <div className="mt-3">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-slate-600">{user.email}</p>
                    <p className="mt-2 text-sm text-slate-600">{user.company.name}</p>
                </div>
            )}
            </aside>
    )
}
export default OwnerInfo