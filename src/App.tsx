import React from 'react';
import './index.css';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFound from './pages/NotFoundPage';
import Header from './components/Header';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
