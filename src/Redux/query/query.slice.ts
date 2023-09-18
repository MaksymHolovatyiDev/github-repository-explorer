import {RootState} from '../store';

export const getQuery = (state: RootState) => state.query.query;
export const getRepo = (state: RootState) => state.query.repo;
