export type SearchProps = {
    searchRepos: (formData: FormData) => Promise<void>,
    error: boolean
}

export type RepoCount = {
    repoCount: number
}

export type repoCard = {
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    html_url: string;
}

export interface Repo {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    html_url: string;
}