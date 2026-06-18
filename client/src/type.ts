export type SearchProps = {
    searchRepos: (formData: FormData) => Promise<void>,
    error: boolean
}