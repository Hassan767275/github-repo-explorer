export type SearchProps = {
    searchRepos: (formData: FormData) => Promise<void>,
    error: boolean
}

export type RepoCount = {
    repoCount: number
}

export interface Repo {
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    html_url: string;
}