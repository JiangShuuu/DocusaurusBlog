import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const data = [
  {
    id: 1,
    title: '簡易視訊聊天室',
    image: './profile/04/01.png',
    mobile: './profile/04/02.jpg',
    link: 'https://profile1.jiangshuuu.com/',
    git: 'https://github.com/JiangShuuu/socket-chat',
    short_intro: 'React / express / MongoDB / Socket.io / Oracle',
    description: (
      <>
        <li>React</li>
        <li>Styled-Component</li>
        <li>Socket.io + Peer.js</li>
        <li>Nodejs + express + MongoDB</li>
        <li>Oracle + Docker + GitHubAction</li>
      </>
    )
  },
  {
    id: 2,
    title: '全端電商',
    image: './profile/01/web.png',
    mobile: './profile/01/mobile.png',
    link: 'https://profile.jiangshuuu.com/',
    git: 'https://github.com/JiangShuuu/vue3-clothingStore-ts',
    short_intro: 'NodeJS / TypeScript(Vue3) / MySQL / Oracle',
    description: (
      <>
        <li>Vue3 + TypeScript + Restful API</li>
        <li>TailwindCss(前台) + Element-Plus(後台) </li>
        <li>Nodejs + express + MySQL</li>
        <li>Oracle + Docker + GitHubAction</li>
        <li>Rendertron for SEO</li>
      </>
    )
  },
  {
    id: 3,
    title: '旅遊查詢(前端)',
    image: './profile/02/web.jpg',
    mobile: './profile/02/mobile.jpg',
    link: 'https://jiangshuuu.github.io/travel_website/',
    git: 'https://github.com/JiangShuuu/travel_website',
    short_intro: 'Vue2 / 交通部API / Scss',
    description: (
      <>
        <li>For The F2E 活動</li>
        <li>Vue2 + 交通部API</li>
        <li>Scss</li>
        <li>Github Page</li>
      </>
    )
  },
  {
    id: 4,
    title: 'Twitter 前後協作專案',
    image: './profile/03/DemoGif.gif',
    // mobile: './profile/03/demo.jpg',
    link: 'https://jiangshuuu.github.io/twitter_project/',
    git: 'https://github.com/JiangShuuu/twitter_project',
    short_intro: 'Vue2 / Restful API / Scss',
    description: (
      <>
        <li>Vue2 + Restful API</li>
        <li>Scss</li>
        <li>Github Page</li>
      </>
    )
  },
];

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

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3600);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

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
              <section className={`article ${position}`} key={id}>
                <section className={styles.mobile}>
                  <div className={styles.mobile_image}>
                    <a href={link} target="_blank">
                      <img src={image} alt="" />
                    </a>
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
                    <a href={link} target="_blank" className={styles.desktop_image_02}>
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
              </section>
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
