'use client';

import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase} from './SearchBar.styled';
import {SearchBarProps} from '@/Types';
import {useLazyGetGitHubRepositoriesQuery} from '@/Redux/api/api';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setQuery} from '@/Redux/query/query';
import {Button} from '@mui/material';

function SearchBar({setList}: SearchBarProps) {
  const [user, setUser] = useState('');
  const [fetch, {data, isFetching}] = useLazyGetGitHubRepositoriesQuery();
  const dispatch = useDispatch();

  const onSearchBarChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setUser(evt.target.value);

    if (!evt.target.value) setList(null);
  };

  const onButtonClick = () => {
    if (user) {
      dispatch(setQuery(user));
      fetch({name: user, page: 0});
    }
  };

  useEffect(() => {
    if (!isFetching && data) setList(data);
  }, [isFetching]);

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
