---
id: react-query
sidebar_position: 8
last_update:
  date: 2022/02/26
  author: JohnShuuu
tags: [react, react-query]
title: 【套件】ReactQuery
description: React 學習筆記, 用範例快速理解, ReactQuery
---
# ReactQuery 使用
React 前端快取工具, 提供簡易方法將 api 的資料做快取, 防止api短時間內重複被call, 並且可以設定時間或條件自動重打 api, 確保資料更新
## 基礎使用

### 建置

```jsx
// _app.tsx

import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

### Static 頁面

```jsx
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const getData = async () => {
  const { data } = await axios.get('https://swapi.dev/api/people/9');
  return data;
};

export default function index() {
  const { data, isLoading, isError } = useQuery(['static_axios'], getData);

  if (isLoading) {
    return <h1>isLoading</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <main>
      <h1>Axios Static Data</h1>
      <div>{data.name}</div>
    </main>
  );
}
```

### SSR 頁面

- 在 ServerSideProps 內, 可在 Server 端獲得 data, 並先存置指定名稱, 並在下方 useQuery 會先拿到相同位置的 data, 讓 seo 抓得到資料

```jsx
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';

const getData = async () => {
  const { data } = await axios.get('https://swapi.dev/api/people/9');
  return data;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  // 自訂 data, 丟出後要在下方自訂props接住
  // const data = await queryClient.fetchQuery(['axios_ssr'], getData);

  // hydrate, 省去 props 步驟
  await queryClient.fetchQuery(['axios_ssr'], getData);

  return {
    props: {
      // custmers: data
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export default function ssr({ custmers }: any) {
  const { data, isLoading, isError } = useQuery({
    // cache 名稱
    queryKey: ['axios_ssr'],
    // fn
    queryFn: getData,

    /* 預設 data. 傳入props給的值 (不用hydrate的話要開啟)
    initialData: custmers, */

    // 快取保留時間 20秒
    staleTime: 20 * 1000,
    // 切回換視窗,頁面即時更新
    refetchOnWindowFocus: false,
    // 定義輸出資料
    select: (data) => {
      return {
        id: data.name,
        num: data.height
      };
    }
  });

  if (isLoading) {
    return <h1>isLoading</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <main>
      <h1>Axios SSR Data</h1>
      <div>{data.id}</div>
      <div>{data.num}</div>
      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
    </main>
  );
}
```

### infinityScrollBar

- useInfiniteQuery 包含 hasNextPage, fetchNextPage, isFetching, isFetchingNextPage 幾個值檢測是否還有下一頁資料
- getNextPageParam 包含兩個值 lastPage(為當前獲取資料, 若有 totalPage 可以在此使用), pages(為 useInfiniteQuery 把資料數量切分群組)
- useInView 為官方案例使用 observer, 用來監聽指定區塊, 當畫面出現指定區塊, 觸發 fetchNextPage

```jsx
import React, { Fragment, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

const fetchData = ({ pageParam = 1 }) => {
  return axios.get(`http://openlibrary.org/search.json?q=tests&limit=10&page=${pageParam}`);
};

export default function InfinityScrollexample() {
  const { ref, inView } = useInView();

  const { isLoading, isError, error, data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(['books'], fetchData, {
    staleTime: 10 * 1000,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, pages) => {
      // 資料長度 return pageParam
      if (pages[pages.length - 1].data.docs.length >= 5) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    }
  });

  const books = data?.pages;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
		<Infinity>
			<div className='content'>
	      <div className='box-1'>
	        {isLoading && <h2>Loading...</h2>}
	
	        {isError && <h2>Error...</h2>}
	        {books &&
	          books.map((item: any, idx: number) => {
	            const docs = item.data.docs;
	            return (
	              <Fragment key={idx}>
	                {docs.map((book: any, idx: number) => {
	                  if (docs.length === idx + 1) {
	                    return (
	                      <p key={idx} ref={ref} className='123'>
	                        {book.title}
	                      </p>
	                    );
	                  } else {
	                    return <p key={idx}>{book.title}</p>;
	                  }
	                })}
	              </Fragment>
	            );
	          })}
	      </div>
	      {isFetching && isFetchingNextPage && <div>FetchingMore...</div>}
	    </div>
		</Infinity>
  );
}
const Infinity = styled.div`
  .content {
    .box-1 {
      width: 100%;
      height: 300px;
      overflow-y: scroll;
      border: 1px solid;
    }
    .btn {
      display: flex;
    }
  }
`;
```

### useMutation

- useMutation 用於 post (使用者提交表單或執行其他修改資料的操作), 並提供 onError, onSuccess 等狀態處理

```jsx
export const sendComment = (axios: AxiosInstance, id: number, subject: string, content: string) => {
  return axios.post(`/api/a/owner/comment`, {
    book_id: id,
    subject,
    content,
  })
}

const { mutate, isLoading } = useMutation({
  mutationFn: (data: Comment) => {
    return sendComment(axios, id, data.subject, data.content)
  },
  onError: (error, variables, context) => {
    toast.warn(t('系統部份功能異常，請稍後再試') as string)
  },
  onSuccess: (data, variables, context) => {
    toast.success('送出成功')

    queryClient.resetQueries(['comments', 'news', id])
  },
})

const onSubmit = (data: FieldValues) => {
  if (status === 'unauthenticated') {
    toast.warn(t('請登入會員') as string)

    return false
  }
	
	// mutate 傳入 data
  mutate({ subject: data.subject, content: data.content })
}
```