import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import '../css/index.css'
// import clsx from 'clsx';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.person_header}>
      <section className={styles.person_box}>
        <img src='/img/photo.jpeg' className={styles.person_img} />
        <p className={styles.title}>John Lu</p>
        <p className={styles.text}>技術分享, 持續學習, 筆記記錄, 全端開發</p>
        <p className={styles.text}>Everything is Figureoutable!</p>
        {/* <Link
          className="button button--secondary button--lg"
          to="/cv">
          More Info
        </Link> */}
      </section>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="首頁 & 作品導覽"
      description="Everything is Figureoutable!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}