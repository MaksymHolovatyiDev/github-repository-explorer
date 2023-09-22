export interface Items {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
}

export interface UserRepoRes extends Items {
  owner: {login: string};
  html_url: string;
}

export interface QueryReq {
  user: string;
  page: number;
}

export interface getUserRepo {
  id: string;
}

export interface RepoReq {
  name: string;
  repo: string;
}
