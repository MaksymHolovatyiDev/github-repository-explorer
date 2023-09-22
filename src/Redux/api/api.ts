import {Items, QueryReq, UserRepoRes, getUserRepo} from '@/Types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const baseUrl = 'https://api.github.com/';

export const gitHubApi = createApi({
  reducerPath: 'gitHubApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getGitHubUserRepository: builder.query<UserRepoRes, getUserRepo>({
      query: ({id}) => `repositories/${id}`,
    }),
  }),
});

export const getGitHubRepositories = createAsyncThunk(
  'query/fetchGitHubRepositories',
  async (query: QueryReq) => {
    const response = await axios.get(
      baseUrl + `users/${query.user}/repos?page=${query.page}&per_page=5`,
    );
    return response.data;
  },
);

export const getUserRepoCount = createAsyncThunk(
  'query/fetchUserRepositoriesCount',
  async (user: string) => {
    const response = await axios.get(baseUrl + `users/${user}`);
    return response.data;
  },
);

export const {useGetGitHubUserRepositoryQuery} = gitHubApi;
