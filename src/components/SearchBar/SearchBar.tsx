'use client';

import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase} from './SearchBar.styled';
import {getGitHubRepositories, getUserRepoCount} from '@/Redux/api/api';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changePage, changeUser, resetList} from '@/Redux/query/query';
import {Button} from '@mui/material';
import {getQuery} from '@/Redux/query/query.slice';

function SearchBar() {
  const [user, setUser] = useState('');
  const dispatch = useDispatch<any>();

  const query = useSelector(getQuery);

  const onSearchBarChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setUser(evt.target.value);

    if (!evt.target.value) resetList();
  };

  const onButtonClick = () => {
    if (user) {
      dispatch(changeUser(user));
      dispatch(changePage(1));
      dispatch(getUserRepoCount(user));
      dispatch(getGitHubRepositories({user, page: 1}));
    }
  };

  useEffect(() => {
    if (query.user) setUser(query.user);
  }, []);

  return (
    <div className="flex mb-4">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={user}
          onChange={onSearchBarChange}
          inputProps={{'aria-label': 'search'}}
        />
      </Search>
      <Button type="button" onClick={onButtonClick}>
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
