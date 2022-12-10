---
id: next-base-data-render
sidebar_position: 6
last_update:
  date: 2022/12/10
  author: JohnShuuu
tags: [react, hook]
title: 【Next】四種資料生成模式
description: 記錄 Next ISR SSG SSR CSR 使用方式, 與該注意的地方
---
# Next 四種資料生成模式
## 前言
Next 提供了三種模式來做資料的渲染, 分別為

- SSR：Server Side Rendering
- SSG：Static Site Generation
- ISR：Incremental Static Regeneration
- CSR：Client Side Rendering

在使用時只能在 pages 單頁的檔案內選用一種, 並且只有需要用資料生成的區塊會根據模式而有不同, 非資料生成的區塊則會使用 SSG 方式呈現

## SSR：Server Side Rendering

伺服器渲染, 進到該頁面時會由伺服器抓完資料後產生頁面再貼出, 

- 好處  
  確保 html 能產生完整資料, 讓SEO判斷能完整抓取頁面內容
- 壞處  
  頁面切換時在向資料庫取得資料並生成html時, 由於都是在伺服器端, 所以客戶端會呈現白畫面

### 使用方式

- 引入 type GetServerSideProps
- 建立 getServerSideProps 抓取資料, 用 props 方式傳入頁面生成 function

### 單頁

```jsx
const getData = async () => {
  const { data } = await axios.get('https://swapi.dev/api/');
  return data;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getData();

  return {
    props: {
      data
    }
  };
};

export default function SSR({ data }: Data) {
  return (
    <>
      <main>
        <h2>Next SSR</h2>
        <Nav linkUrl={linkUrl} />
        <p>{JSON.stringify(data)}</p>
      </main>
    </>
  );
}
```

### ID頁

基本上跟單頁的設定一樣, 只是需多一個 id 判斷

若該 id 找不到資料時, 則在 getServerSideProps 狀態時用 return notFound 導向 404 頁面

```jsx
const getData = async (id: number) => {
  const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
  return data;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(params && params.id);
  let data = null;

  try {
    data = await getData(id);
  } catch (err) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data
    }
  };
};

export default function SSRID({ data }: Data) {
  return (
    <>
      <main>
        <h2>Next SSR ID</h2>
        <Nav linkUrl={linkUrl} />
        <div className='data'>
          <p>name: {data.name}</p>
          <p>url: {data.url}</p>
        </div>
        <p>{JSON.stringify(data)}</p>
      </main>
    </>
  );
}
```

## SSG：Static Site Generation

在 build 的階段, 產生含資料的 html 檔案, 要特別注意的是在 build 的過程一樣是由伺服器端去抓取資料, 無法使用 cookies 等瀏覽器資料 

- 好處  
  確保 html 能產生完整資料, 讓SEO判斷能完整抓取頁面內容  
  並且由於是 build 的階段就預先產生完整的 html 檔案, 比起 SSR 更快呈現畫面也不會白畫面
- 壞處  
  由於 html 是固定的, 當頁面資料更換時, 該頁面一樣是呈現舊資料, 需重新 build 才能獲取新資料  
  不適用於資料頻繁更新的頁面, 並且 build 產生的靜態檔案會越來越厚

### 使用方式

- 引入 type GetStaticProps
- 建立 getStaticProps 抓取資料, 用 props 方式傳入頁面生成 function

### 單頁

```jsx
const getData = async () => {
  const { data } = await axios.get(`https://swapi.dev/api/`);
  return data;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getData();

  return {
    props: {
      data
    }
  };
};

export default function SSG({ data }: Data) {
  return (
    <>
      <main>
        <h2>Next SSG</h2>
        <Nav linkUrl={linkUrl} />
        <p>{JSON.stringify(data)}</p>
      </main>
    </>
  );
}
```

### ID頁

需引入 getStaticPaths 預抓取資料 id, 並且根據不同的 fallback 設定會有不同的抓取方式

```jsx
const getData = async (id: number) => {
  const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
  return data;
};

export const getStaticPaths = () => {
  // 可以用 axios 先去預抓 data 資料內的 id
  // const paths = data.map(item => {
  //   return params: {id: item.id.toString()}
  // })

  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],
    fallback: true
    // fallback: false
    // fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params && params.id);
  let data = null;

  try {
    data = await getData(id);
  } catch (err) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data
    }
  };
};

export default function SSGID({ data }: Data) {
  const router = useRouter();

  // fallback true 使用
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <main>
        <h2>Next SSG ID</h2>
        <Nav linkUrl={linkUrl} />
        <div className='data'>
          <p>name: {data.name}</p>
          <p>url: {data.url}</p>
        </div>
        <p>{JSON.stringify(data)}</p>
      </main>
    </>
  );
}
```

## ISR：Incremental Static Regeneration

與 SSG 機制幾乎相同, 但改善了 SSG 若資料更新後需要重新 build 才會呈現的問題

可以使用 revalidate 來設定每隔多久該頁面就判斷過期並跟資料重新確認資料, 重新生成該頁面的 html

- 好處  
  繼承 SSG 好處以及改善了 SSG 資料更新問題, 該頁面會在設定的時間重新生成該頁面, 確保資料維持在一定新的狀態
- 壞處  
  雖然可以設定秒數更新頁面, 但一樣還是不適用於資料非常頻繁更新的頁面(如：產品價錢頁)
  並且與 SSG 相同, build 產生的靜態檔案會越來越厚

### 使用方式

### 單頁

```jsx
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('http://localhost:4000/products');

  return {
    props: {
      data
    },
    revalidate: 10
  };
};

export default function ISR({ data }: Data) {
  const router = useRouter();

  return (
    <>
      <main>
        <h2>Next ISR ID</h2>
        <Nav linkUrl={linkUrl} />
        <div className='data'>
          <p>{JSON.stringify(data)}</p>
        </div>
      </main>
    </>
  );
}
```

### ID頁

與 SSG 的 id頁模式一樣

```jsx
export const getStaticPaths = async () => {
  const { data } = await axios.get('http://localhost:4000/products');

  const paths = data.map((item: Data) => ({
    params: { id: item.id.toString() }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params && params.id);
  const { data } = await axios.get(`http://localhost:4000/products/${id}`);

  return {
    props: {
      data
    },
    revalidate: 10
  };
};

export default function Home({ data }: any) {
  const router = useRouter();

  // fallback true 使用
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <main>
        <h2>Next ISR ID</h2>
        <Nav linkUrl={linkUrl} />
        <div className='data'>
          <p>id: {data.id}</p>
          <p>name: {data.name}</p>
        </div>
        <p>{JSON.stringify(data)}</p>
      </main>
    </>
  );
}
```

## CSR：Client Side Rendering

客戶端渲染, 該模式不會像 SSR 頁面抓取資料時頁面反白, 但會 html 的資料區塊會是空白的, 會讓 SEO 分數不高, 適合用於後台或會員頁面等非網站重要內容頁面

- 好處  
  不會造成像 SSR 切換頁面時的白畫面, 也無需像 SSG & ISR 預先生成 html 靜態檔, 一切都由 client 端生成
- 壞處  
  檢視原始碼時, html 的資料生成區塊會是空白的, 不利於 SEO

### 單頁

```jsx
export default function CSR() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    try {
      const { data } = await axios.get('https://swapi.dev/api/');
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main>
        <h2>Next CSR</h2>
        <Nav linkUrl={linkUrl} />
        {isLoading ? <p>isLoading...</p> : <p>{JSON.stringify(data)}</p>}
      </main>
    </>
  );
}
```

### ID頁

CSR 不像 SSR 或 SSG 可以直接使用 params 內的 id 去判別id, 需先使用 useRouter 抓出 id 後判別

```jsx
export default function CSRID() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const id = Number(router.query.id);

  async function getData(id: number) {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id) getData(id);
  }, [id]);

  return (
    <>
      <main>
        <h2>Next CSR</h2>
        <Nav linkUrl={linkUrl} />
        {isLoading ? <p>isLoading...</p> : <p>{JSON.stringify(data)}</p>}
      </main>
    </>
  );
}
```

## getStaticPaths 的 fallback 機制

fallback模式分為三種

### fallback：false

- 找不到指定id則導向404

已下方為例, 若 getStaticPaths 傳出的 params id 只有 1~3, 那使用者輸入 4 時, 則直接導向 404

```jsx
export const getStaticPaths = () => {
	// 可以用 axios 先去預抓 data 資料內的 id
  // const paths = data.map(item => {
  //   return params: {id: item.id.toString()}
  // })

  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],

    fallback: false
  };
};
```

### fallback：true

- 直接往下執行, 有 router.isFallback 可使用, 404要另外設定找不到id return notFound

已下方為例, 若 getStaticPaths 傳出的 params id 一開始只有 1~3, 在使用者輸入 4 時, 會直接往下執行去抓取 id 4 的資料

由於是直接往下執行, 需做一層 id 判斷才不會報錯

```jsx
export const getStaticPaths = () => {
	// 可以用 axios 先去預抓 data 資料內的 id
  // const paths = data.map(item => {
  //   return params: {id: item.id.toString()}
  // })

  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],

    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params && params.id);
  let data = null;

  try {
    data = await getData(id);
  } catch (err) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data
    }
  };
};
```

### isFallback

當 fallback 為 true 時, 可以在頁面生成的 function 引入 router.isFallback, 來判斷向資料庫確認id存不存在時的 loading 顯示使用

```jsx
export default function Home({ data }: any) {
  const router = useRouter();

  // fallback true 使用
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <main>
        <h2>Next SSG ID</h2>
        <Nav linkUrl={linkUrl} />
        <div className='data'>
          <p>name: {data.name}</p>
          <p>url: {data.url}</p>
        </div>
        <p>{JSON.stringify(data)}</p>
      </main>
    </>
  );
}
```

### fallback：blocking

- 跟true一樣往下執行, 但沒有 router.isFallback 使用, 404要另外設定找不到id return notFound

```jsx
export const getStaticPaths = () => {
	// 可以用 axios 先去預抓 data 資料內的 id
  // const paths = data.map(item => {
  //   return params: {id: item.id.toString()}
  // })

  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],

    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params && params.id);
  let data = null;

  try {
    data = await getData(id);
  } catch (err) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data
    }
  };
};
```