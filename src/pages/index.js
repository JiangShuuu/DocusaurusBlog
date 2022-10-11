import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import '../css/index.css'
// import clsx from 'clsx';
// import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className='person-header'>
      <article className='person-box'>
        <img src='/img/photo.jpeg' className="person-img" />
        <p className='title'>John Lu</p>
        <p className='text'>技術分享, 持續學習, 筆記記錄, 全端開發</p>
        <Link
          className="button button--secondary button--lg"
          to="/cv">
          More Info
        </Link>
      </article>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}