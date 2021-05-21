import React from 'react';
import './index.css';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFound from './pages/NotFoundPage';

const App = () => {
  return useRoutes(routes) || <NotFound />;
};

export default App;
