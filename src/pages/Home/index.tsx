import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout>
        <div>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know this type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => {}}>See pokemon</Button>
        </div>
        <div>We&apos;ll see Parallax here soon...</div>
      </Layout>
    </div>
  );
};

export default HomePage;
