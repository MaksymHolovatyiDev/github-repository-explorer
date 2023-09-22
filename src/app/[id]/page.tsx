'use client';

import {Provider} from 'react-redux';
import {store} from '@/Redux/store';

import RepositoryDetails from '@/components/RepositoryDetail/RepositoryDetail';

export default function Home() {
  return (
    <Provider store={store}>
      <RepositoryDetails />
    </Provider>
  );
}
