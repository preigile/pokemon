import React from 'react';
import cn from 'classnames';

import style from './App.module.scss';

const App = () => {
  return <div className={cn(style.header, 'color')}>This is app content!</div>;
};

export default App;
