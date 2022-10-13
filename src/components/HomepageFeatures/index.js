import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '全端電商',
    image: './profile/01.png',
    mobile: './profile/02.png',
    link: 'https://profile.jiangshuuu.com/',
    short_intro: 'NodeJS / TypeScript(Vue3) / MySQL / Oracle',
    description: (
      <>
        123
      </>
    )
  },
  // {
  //   title: '旅遊查詢',
  //   image: './profile/01.jpeg',
  //   description: (
  //     <>
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit accusantium, possimus corrupti nam ratione doloribus deserunt cumque quidem id reiciendis ut quisquam mollitia neque tempora perspiciatis? Cumque, hic quae.
  //     </>
  //   )
  // },
];

function Feature({image, mobile, short_intro, link, title, description}) {
  return (
    <>
      <section className={styles.mobile}>
        <div className="text--center">
          <a href={link} target="_blank">
            <img src={image} alt="" />
          </a>
          {/* <Svg className={styles.featureSvg} role="img" /> */}
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{short_intro}</p>
        </div>
      </section>
      <section className={styles.desktop}>
        <div className={styles.desktop_image}>
          <a href={link} target="_blank">
            <img src={image} alt="" />
          </a>
          <a href={link} target="_blank">
            <img src={mobile} alt="" />
          </a>
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {/* <h1 className={styles.title_h1}>Recent Project</h1> */}
      <section className={styles.features}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </section>
    </>
  );
}
