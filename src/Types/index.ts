export interface Items {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
}

export interface QueryReq {
  name: string;
  page: number;
}

export interface RepoReq {
  name: string;
  repo: string;
}

export interface SearchBarProps {
  setList: (data: Items[] | null) => void;
}
