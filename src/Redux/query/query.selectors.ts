import {RootState} from '../store';

export const getQuery = (state: RootState) => state.query.query;
export const getList = (state: RootState) => state.query.list;
export const getPagesCount = (state: RootState) => state.query.pagesCount;
export const userFound = (state: RootState) => state.query.userFound;
