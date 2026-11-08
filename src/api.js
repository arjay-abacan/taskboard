const API_URL = 'https://jsonplaceholder.typicode.com'

// Test switch for the loading, empty and error states.
// Manual change to 'slow', 'empty' or 'error', check the page, set it back to null.
const FORCE = null

export async function fetchTasks() {
    if (FORCE == 'slow') {await new Promise((resolve) => setTimeout(resolve,3000))}
    if (FORCE == 'error') {throw new Error('Forced Error for testing.')}
    const response = await fetch(`${API_URL}/todos`)
    if (!response.ok) {throw new Error(`The server responded with status ${response.status}.`)}
    const tasks = await response.json()
    return FORCE == 'empty' ? [] : tasks
}

export async function fetchTask(id) {
    const response = await fetch(`${API_URL}/todos/${id}`)
    if (response.status === 404) {throw new Error(`There is no task with ID "${id}".`)}
    if (!response.ok) {throw new Error(`The server responded with status ${response.status}.`)}
    return response.json()
}

export async function fetchUser(id) {
    const response = await fetch(`${API_URL}/users/${id}`)
    if (!response.ok) {throw new Error(`The server responded with status ${response.status}.`)}
    return response.json()
}