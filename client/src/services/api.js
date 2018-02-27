
export const fetchStoredProjects = async () => {
  try {
    const initialFetch = await fetch('/api/v1/projects')
    const fetchedProjects = await initialFetch.json()
    return fetchedProjects
  } catch (error) {
    return error
  }
}

export const fetchProjectContributors = async (id) => {
  try {
    const initialFetch = await fetch(`/api/v1/projects/${id}/contributors`)
    const fetchedContributors = await initialFetch.json()
    return fetchedContributors
  } catch (error) {
    return error
  }
}