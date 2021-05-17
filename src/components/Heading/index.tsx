import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface HeadingProps {
  className?: string;
  as: HeadingSize;
}

const Heading: React.FC<HeadingProps> = ({ children, className, as }) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return <Tag className={cn(s.root, className)}>{children}</Tag>;
};

export default Heading;
