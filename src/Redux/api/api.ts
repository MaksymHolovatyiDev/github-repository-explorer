import {Items, QueryReq} from '@/Types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.github.com/users/';

export const gitHubApi = createApi({
  reducerPath: 'gitHubApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    getGitHubRepositories: builder.query<Items[], QueryReq>({
      query: ({name, page}) => `${name}/repos?page=${page}&per_page=5`,
    }),
  }),
});

export const {useLazyGetGitHubRepositoriesQuery} = gitHubApi;
