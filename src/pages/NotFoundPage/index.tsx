import React from 'react';
import { navigate } from 'hookrouter';

import TeamRocket from './assets/Team_Rocket.png';
import s from './NotFound.module.scss';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.errorText}>404</div>
        <div className={s.layer}>
          <figure>
            <img src={TeamRocket} alt="Team Rocket" />
            <figcaption className={s.subTitle}>
              <span className={s.whiteText}>The rocket team</span> has won this time.
            </figcaption>
          </figure>
          <Button color="yellow" onClick={() => navigate(LinkEnum.HOME)}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
