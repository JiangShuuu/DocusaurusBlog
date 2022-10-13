import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '全端電商',
    image: './profile/01.jpeg',
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit accusantium, possimus corrupti nam ratione doloribus deserunt cumque quidem id reiciendis ut quisquam mollitia neque tempora perspiciatis? Cumque, hic quae.
      </>
    )
  },
  {
    title: '旅遊查詢',
    image: './profile/01.jpeg',
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit accusantium, possimus corrupti nam ratione doloribus deserunt cumque quidem id reiciendis ut quisquam mollitia neque tempora perspiciatis? Cumque, hic quae.
      </>
    )
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt="" />
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {/* <h1>Recent Project</h1> */}
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
