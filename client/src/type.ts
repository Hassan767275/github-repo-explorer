export interface SearchProps {
    searchRepos: (formData: FormData) => Promise<void>,
    error: boolean
}

export interface RepoCount {
    repoCount: number
}

export interface repoCard {
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

export interface UserInfo {
    username: string,
    email: string,
    password: string
}