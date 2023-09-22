import {useSelector} from 'react-redux';
import {getList} from '@/Redux/query/query.selectors';
import {useRouter} from 'next/navigation';
import {MainPagination} from '@/components/MainPagination/MainPagination';

function RepositoryList() {
  const router = useRouter();
  const list = useSelector(getList);

  const onCardClick = (repo: any) => {
    router.push(`/${repo.id}`);
  };

  return list.length !== 0 ? (
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
      <MainPagination />
    </>
  ) : (
    <p>Search</p>
  );
}

export default RepositoryList;
