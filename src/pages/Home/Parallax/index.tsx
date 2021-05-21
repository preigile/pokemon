import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import s from './style.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/CloudBig.png';
import PikachuPng from './assets/Pikachu.png';

interface ParallaxProps {
  className?: string;
}

const Parallax: React.FC<ParallaxProps> = ({ className }) => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  const handleMouseMove = (event: MouseEvent) => {
    setScreenX(event.screenX);
    setScreenY(event.screenY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={cn(s.root, className)}>
      <div
        className={s.smallPokeBall}
        style={{
          transform: `translate(${screenY * 0.04}px, ${screenX * 0.04}px`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className={s.cloud}
        style={{
          transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px`,
        }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div
        className={s.cloudBig}
        style={{
          transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px`,
        }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>
      <div
        className={s.pokeBall}
        style={{
          transform: `translate(${screenY * 0.03}px, ${screenX * 0.03}px`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={s.pikachu}
        style={{
          transform: `translate(${screenY * 0.06}px, ${screenX * 0.06}px`,
        }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
