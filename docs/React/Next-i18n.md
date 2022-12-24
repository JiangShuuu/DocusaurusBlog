---
id: next-i18n
sidebar_position: 7
last_update:
  date: 2022/12/24
  author: JohnShuuu
tags: [react, next, i18n]
title: 【Next】i18n使用
description: 記錄 Next i18n 不同模式下的引用方式
---
# Next-i18n 使用
## 前言
在 Next 使用多國語言時, 由於是 ssr 架構, 所以需要另外裝 next-i18n 做設定

## 安裝項目

```jsx
yarn add next-i18next react-i18next i18next
```

### 前置1, 全域設定

- import { appWithTranslation }
- 把 App function 包起來

```jsx
// _app.tsx

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
```

### 前置2, 建立語言

- 在 /public/locales 路徑建立語系資料夾及新增 json 檔，如下

```jsx
// /public/locales/zh-Hant/common.json
{
  "不可空白": "請至少輸入一個繁體",
  "Biggs Darklighter": "繁體大黑",
	"語言": "繁體",
  "關於我們": "關於我們"
}

// /public/locales/zh-Hans/common.json
{
  "不可空白": "请输入至少一个简体",
  "Biggs Darklighter": "简体大黑",
	"語言": "简体",
  "關於我們": "关于我们"
}

```

### 前置3, 建立 config 檔

```jsx
// next-i18next.config.js

module.exports = {
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'zh-Hans'],
  },
  fallbackLng: {
    default: ['zh-Hant'],
  },
};
```

## 使用環境

- import { serverSideTranslations } ,  ssg 或 ssr 使用的 function, 用來判斷需傳入哪個檔案
- import { useTranslation }, 用來進行實際語系轉換的 hook
- t(’ ’) 直接轉換該指定名稱
- i18n , useTranslation 的物件, 可以拉出 i18n.languages, i18n.changeLanguage 等資料及function

### SSG

```jsx
import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

export async function getStaticProps({ locale }: any) {
  const { data } = await axios.get('https://swapi.dev/api/people/9');
  
  return {
    props: {
      customer: data,
      ...(await serverSideTranslations(locale || 'zh-Hant', ['common']))
    }
  };
}

export default function I18n({ customer }: any) {
  const { t, i18n } = useTranslation('common');

  const router = useRouter();

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === 'zh-Hant' ? 'zh-Hans' : 'zh-Hant';

  return (
    <>
      <div>{t('語言')}</div>
      <p>API資料姓名 : {t(`${customer.name}`)}</p>
      <p>其他資料：{JSON.stringify(customer)}</p>
      <button onClick={() => onToggleLanguageClick(changeTo)}>{t('語言')}</button>
    </>
  );
}
```

### SSR

```jsx
import React from 'react';
import type { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import axios from 'axios';
import { useRouter } from 'next/router';

export async function getServerSideProps({ locale, req, res }: GetServerSidePropsContext) {
  const { data } = await axios.get('https://swapi.dev/api/people/9');
  
  return {
    props: {
      customer: data,
      ...(await serverSideTranslations(locale || 'zh-Hant', ['common']))
    }
  };
}

export default function SsrPage({ customer }: any) {
  const { t, i18n } = useTranslation('common');

  console.log(t, i18n);

  const router = useRouter();

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === 'zh-Hant' ? 'zh-Hans' : 'zh-Hant';

  return (
    <>
      <div>{t('語言')}</div>
      <p>API資料姓名 : {t(`${customer.name}`)}</p>
      <p>其他資料：{JSON.stringify(customer)}</p>
      <button onClick={() => onToggleLanguageClick(changeTo)}>{t('語言')}</button>
    </>
  );
}
```

## SPA環境

由於是非SSR或SSG環境, 可以直接引入 “react-i18next” 做語言轉換即可.

- i18n.use initReactI18next 做初始化設定
- resources 定義語系以及翻譯文字, 可以直接打或者引入 json

```jsx
import React from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import zh_Hant from '../../public/locales/zh-Hant/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: 'aboutEn',
        lang: 'langEn'
      }
    },
    tw: {
      translation: zh_Hant
    }
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});

export default function I18n() {
  const { t, i18n } = useTranslation();

  const changeLang = i18n.language === 'tw' ? 'en' : 'tw';

  return (
    <>
      <h2>{t('about')}</h2>
      <h2>{t('lang')}</h2>
      <button onClick={() => i18n.changeLanguage(changeLang)}>轉換</button>
    </>
  );
}
```