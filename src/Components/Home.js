import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Home" description="Home do site Dogs." />
      <Feed />
    </section>
  );
};
