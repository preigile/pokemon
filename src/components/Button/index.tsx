import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

type BtnSize = 'medium' | 'small';
type BtnColor = 'green' | 'yellow' | 'blue';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  isFullWidth?: boolean;
  color?: BtnColor;
  size?: BtnSize;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = null,
  isFullWidth,
  color = 'green',
  size = 'medium',
}) => {
  return (
    <button type="button" className={cn(s.root, className, s[size], s[color], { isFullWidth })} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
