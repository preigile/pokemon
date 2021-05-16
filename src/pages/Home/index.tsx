import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

import s from './Home.module.scss';
import Parallax from './Parallax';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know this type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => {}}>See pokemon</Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
