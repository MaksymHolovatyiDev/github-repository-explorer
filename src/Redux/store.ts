import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {gitHubApi} from './api/api';
import {queryReducer} from './query/query';

export const store = configureStore({
  reducer: {
    [gitHubApi.reducerPath]: gitHubApi.reducer,
    query: queryReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gitHubApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
