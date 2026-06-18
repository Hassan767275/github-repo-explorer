export type SearchProps = {
    searchRepos: (formData: FormData) => Promise<void>,
    error: boolean
}

export type RepoCount = {
    repoCount: number
}