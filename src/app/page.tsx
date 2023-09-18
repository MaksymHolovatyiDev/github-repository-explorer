'use client';

import {store} from '@/Redux/store';

import MainPage from '@/components/MainPage';
import {Provider} from 'react-redux';

export default function Home() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}
