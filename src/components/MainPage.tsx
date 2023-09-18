import RepositoryList from '@/components/RepositoryList/RepositoryList';
import SearchBar from '@/components/SearchBar/SearchBar';
import {useState} from 'react';
import {Items} from '@/Types';
import {useSelector} from 'react-redux';
import RepositoryDetails from './RepositoryDetail/RepositoryDetail';
import {getRepo} from '@/Redux/query/query.slice';

function MainPage() {
  const [list, setList] = useState<Items[] | null>(null);

  const repo = useSelector(getRepo);

  return repo?.name ? (
    <RepositoryDetails />
  ) : (
    <div className="flex min-h-screen flex-col items-center p-24">
      <SearchBar setList={setList} />
      {list ? <RepositoryList list={list} setList={setList} /> : <p>Search</p>}
    </div>
  );
}

export default MainPage;
