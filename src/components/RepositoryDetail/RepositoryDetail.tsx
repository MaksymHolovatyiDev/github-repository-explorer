import {resetRepo} from '@/Redux/query/query';
import {getRepo} from '@/Redux/query/query.slice';
import {Button} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';

function RepositoryDetails() {
  const repo = useSelector(getRepo);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(resetRepo());
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Button type="button" className="self-start" onClick={onButtonClick}>
        Back
      </Button>
      <p>Name: {repo.name}</p>
      <p>Owner's username: {repo.owner.login}</p>
      <p>Description: {repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>
        Link to the repository on GitHub:{' '}
        <a href={repo.html_url}>{repo.html_url}</a>
      </p>
    </div>
  );
}

export default RepositoryDetails;
