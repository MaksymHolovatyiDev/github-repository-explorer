import {setRepo} from '@/Redux/query/query';
import {Items} from '@/Types';
import {useDispatch, useSelector} from 'react-redux';
import RepositoryDetails from '../RepositoryDetail/RepositoryDetail';
import {Button} from '@mui/material';
import {useEffect, useState} from 'react';
import {getQuery} from '@/Redux/query/query.slice';
import {useLazyGetGitHubRepositoriesQuery} from '@/Redux/api/api';

function RepositoryList({
  list,
  setList,
}: {
  list: Items[];
  setList: (data: Items[]) => void;
}) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const name = useSelector(getQuery);
  const [fetch, {data, isFetching}] = useLazyGetGitHubRepositoriesQuery();

  const onCardClick = (repo: unknown) => {
    dispatch(setRepo(repo));
  };

  const onNextClick = () => {
    fetch({name, page: page + 1});
    setPage(prevState => ++prevState);
  };

  const onPrevClick = () => {
    fetch({name, page: page - 1});
    setPage(prevState => --prevState);
  };

  useEffect(() => {
    if (!isFetching && data) setList(data);
  }, [isFetching]);

  return (
    <>
      <ul className="flex flex-col gap-4">
        {list?.map(el => (
          <li key={el.id}>
            <div
              className="border-amber-400 border-2 p-6 cursor-pointer hover:opacity-70"
              onClick={() => onCardClick(el)}>
              <p>Name: {el.name}</p>
              <p>Description: {el.description}</p>
              <p>Stars: {el.stargazers_count}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex mt-6">
        <Button onClick={onPrevClick} type="button">
          Prev
        </Button>
        <Button onClick={onNextClick} type="button">
          Next
        </Button>
      </div>
    </>
  );
}

export default RepositoryList;
