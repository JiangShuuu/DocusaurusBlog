import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const data = [
  {
    id: 1,
    title: '全端電商',
    image: './profile/01.png',
    mobile: './profile/02.png',
    link: 'https://profile.jiangshuuu.com/',
    git: 'https://github.com/JiangShuuu/vue3-clothingStore-ts',
    short_intro: 'NodeJS / TypeScript(Vue3) / MySQL / Oracle',
    description: (
      <>
        <li>Vue3 + TypeScript</li>
        <li>TailwindCss(前台) + Element-Plus(後台) </li>
        <li>Nodejs + express + MySQL</li>
        <li>Oracle + Docker + GitHubAction</li>
      </>
    )
  },
  {
    id: 2,
    title: '旅遊查詢',
    image: './profile/01.png',
    mobile: './profile/02.png',
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit accusantium, possimus corrupti nam ratione doloribus deserunt cumque quidem id reiciendis ut quisquam mollitia neque tempora perspiciatis? Cumque, hic quae.
      </>
    )
  },
  {
    id: 3,
    title: '旅遊查詢3',
    image: './profile/01.png',
    mobile: './profile/02.png',
    description: (
      <>
        dsadsaLorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit accusantium, possimus corrupti nam ratione doloribus deserunt cumque quidem id reiciendis ut quisquam mollitia neque tempora perspiciatis? Cumque, hic quae.
      </>
    )
  },
];

function Feature({image, git, mobile, short_intro, link, title, description}) {
  return (
    <>
      <section className={styles.mobile}>
        <div className={styles.mobile_image}>
          <a href={link} target="_blank">
            <img src={image} alt="" />
          </a>
          {/* <Svg className={styles.featureSvg} role="img" /> */}
        </div>
        <div className={styles.mobile_box}>
          <a href={git} target="_blank">
            <h3>{title}</h3>
          </a>
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
        <div className={styles.desktop_desc_box}>
          <h3 className={styles.desktop_desc_title}>{title}</h3>
          <div className={styles.desktop_desc}>{description}</div>
          <div className={styles.desktop_btn}>
            <a href={git} target="_blank" className={styles.desktop_btn_text}>More</a>
          </div>
        </div>
        <button className={styles.prev}>
          <FaArrowLeft />
        </button>
        <button className={styles.next}>
          <FaArrowRight />
        </button>
      </section>
    </>
  );
}

export default function HomepageFeatures() {
  const [featureList, setFeatureList] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = featureList.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, featureList]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 3500);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

  return (
    <>
      <section className={styles.features}>
          {featureList.map((lists, idx) => {
            const { id, image, git, mobile, short_intro, link, title, description } = lists
            let position = 'nextSlide'
            if (idx === index) {
              position = 'activeSlide'
            }
            if (
              idx === index -1 ||
              (index === 0 && idx === featureList.length - 1)
            ) {
              position = 'lastSlide'
            }

            return (
              <article className={position} key={id}>
                <section className={styles.mobile}>
                  <div className={styles.mobile_image}>
                    <a href={link} target="_blank">
                      <img src={image} alt="" />
                    </a>
                    {/* <Svg className={styles.featureSvg} role="img" /> */}
                  </div>
                  <div className="text--center padding-horiz--md">
                    <a href={git} target="_blank">
                      <h3>{title}</h3>
                    </a>
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
                  <div className={styles.desktop_desc_box}>
                    <h3 className={styles.desktop_desc_title}>{title}</h3>
                    <div className={styles.desktop_desc}>{description}</div>
                    <div className={styles.desktop_btn}>
                      <a href={git} target="_blank" className={styles.desktop_btn_text}>More</a>
                    </div>
                  </div>
                </section>
              </article>
            )
          })}
          <button className={styles.prev} onClick={() => setIndex(index - 1)}>
            <FaArrowLeft />
          </button>
          <button className={styles.next} onClick={() => setIndex(index + 1)}>
            <FaArrowRight />
          </button>
      </section>
    </>
  );
}
