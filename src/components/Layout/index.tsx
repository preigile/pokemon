import React from 'react';
import cn from 'classnames';

import s from './style.module.scss';

const Layout: React.FC = ({ children, className = null }: any) => (
  <div className={cn(s.root, className)}>{children}</div>
);

export default Layout;
