import {createSlice} from '@reduxjs/toolkit';
import {Items} from '@/Types';
import {getGitHubRepositories, getUserRepoCount} from '../api/api';

const list: Items[] | [] = [];

const query = createSlice({
  name: 'query',
  initialState: {
    query: {user: '', page: 1},
    list,
    userFound: true,
    pagesCount: 0,
  },
  reducers: {
    changeUser: (state, {payload}) => {
      state.query.user = payload;
    },
    changePage: (state, {payload}) => {
      state.query.page = payload;
    },
    resetList: state => {
      state.list = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getGitHubRepositories.fulfilled, (state, action) => {
      state.userFound = true;
      state.list = action.payload;
    });
    builder.addCase(getGitHubRepositories.rejected, state => {
      state.userFound = false;
    });
    builder.addCase(getUserRepoCount.fulfilled, (state, action) => {
      state.userFound = true;
      state.pagesCount = Math.ceil(action.payload.public_repos / 5);
    });
    builder.addCase(getUserRepoCount.rejected, state => {
      state.userFound = false;
    });
  },
});

export const queryReducer = query.reducer;
export const {changeUser, changePage, resetList} = query.actions;
