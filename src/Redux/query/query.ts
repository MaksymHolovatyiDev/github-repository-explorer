import {createSlice} from '@reduxjs/toolkit';

const repo = {
  name: '',
  stargazers_count: 0,
  description: '',
  owner: {login: ''},
  html_url: '',
};

const query = createSlice({
  name: 'query',
  initialState: {
    query: '',
    repo,
  },
  reducers: {
    setQuery: (state, {payload}) => {
      state.query = payload;
    },
    setRepo: (state, {payload}) => {
      state.repo = payload;
    },
    resetRepo: state => {
      console.log(12, repo);
      state.repo = repo;
    },
  },
});

export const queryReducer = query.reducer;
export const {setQuery, setRepo, resetRepo} = query.actions;
