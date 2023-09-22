import {Button} from '@mui/material';
import {usePathname, useRouter} from 'next/navigation';
import {useGetGitHubUserRepositoryQuery} from '@/Redux/api/api';

function RepositoryDetails() {
  const pathname = usePathname();
  const {data, isSuccess} = useGetGitHubUserRepositoryQuery({
    id: pathname.slice(1),
  });

  const router = useRouter();

  const onButtonClick = () => {
    router.back();
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Button type="button" className="self-start" onClick={onButtonClick}>
        Back
      </Button>
      {isSuccess && (
        <>
          <p>Name: {data.name}</p>
          <p>Owner's username: {data.owner.login}</p>
          <p>Description: {data.description}</p>
          <p>Stars: {data.stargazers_count}</p>
          <p>
            Link to the repository on GitHub:{' '}
            <a href={data.html_url}>{data.html_url}</a>
          </p>
        </>
      )}
    </div>
  );
}

export default RepositoryDetails;
