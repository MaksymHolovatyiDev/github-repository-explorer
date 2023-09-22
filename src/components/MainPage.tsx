import {userFound} from '@/Redux/query/query.slice';
import RepositoryList from '@/components/RepositoryList/RepositoryList';
import SearchBar from '@/components/SearchBar/SearchBar';
import {useSelector} from 'react-redux';

function MainPage() {
  const user = useSelector(userFound);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <SearchBar />
      {user ? <RepositoryList /> : <p>User not found!</p>}
    </div>
  );
}

export default MainPage;
