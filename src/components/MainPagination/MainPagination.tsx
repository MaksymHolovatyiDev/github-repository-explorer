import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Pagination, Stack} from '@mui/material';
import {changePage} from '@/Redux/query/query';
import {getGitHubRepositories} from '@/Redux/api/api';
import {getPagesCount, getQuery} from '@/Redux/query/query.selectors';

export function MainPagination() {
  const dispatch = useDispatch<any>();
  const query = useSelector(getQuery);
  const pagesCount = useSelector(getPagesCount);
  const [page, setPage] = useState(query.page);

  const onPaginationChange = (_: any, newPage: number) => {
    setPage(newPage);
    dispatch(getGitHubRepositories({user: query.user, page: newPage}));
    dispatch(changePage(newPage));
  };

  return (
    <Stack className="bg-gray-500 mt-3" spacing={2}>
      <Pagination
        count={pagesCount}
        onChange={onPaginationChange}
        color="primary"
        page={page}
      />
    </Stack>
  );
}
