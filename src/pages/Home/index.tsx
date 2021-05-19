import React from 'react';
import { navigate } from 'hookrouter';

import { LinkEnum } from '../../routes';

import s from './Home.module.scss';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Parallax from './Parallax';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading as="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading as="h3" className={s.description}>
            You can know this type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button
            onClick={() => {
              navigate(LinkEnum.POKEDEX);
            }}>
            See pokemon
          </Button>
        </div>
        <Parallax className={s.contentParallax} />
      </Layout>
    </div>
  );
};

export default HomePage;
