---
id: react-hook-02
sidebar_position: 1
last_update:
  date: 2022/10/22
  author: JohnShuuu
tags: [react, hook]
title: ReactHooks (二)
description: React Hooks 學習筆記, 用範例快速記憶, React.memo, useMemo, useCallback
---
# ReactHooks (二)
在某些情況下, 當父層重新render時, 即使子層的 props或者state 沒有任何變化也會跟著 reRender, 為了避免此情況發生,

根據不同情況可以使用 useMemo React.memo useCallback 來避免。
## React.memo
### 定義

- React.memo 寫在子組件
- React.memo(Component, [areEqual(prevProps, nextProps)]);

### 範例

- 畫面為一個 75x75 的正方形, 父層放兩個按鈕, 一個用來觸發畫面 Re-Render, 一個用來更換正方形顏色  
觸發子層 Re-Render
- 若子層不用 React.memo 包起來, 每次按 Re-Render App 按鈕都會觸發子層 Re-Render, 即使 prop值並未更改

```jsx
import { useState, memo } from "react";

function Swatch({ color }) {
  console.log(`Swatch rendered ${color}`)
  return <div style={{ margin: 2, width: 75, height: 75, backgroundColor: color }}></div>;
}

// 若沒有用memo包起來, 在每次的 reRender 都會觸發子層
const MemoedSwatch = memo(Swatch)

export default function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red")

  console.log("app render", { appRenderIndex });
  
  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Re-Render App
        </button>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
	         Change Color
        </button>
      </div>

      <MemoedSwatch color={color} />
    </div>
  );
}
```

## useMemo
### 定義

- 記憶的值不變就不會觸發重新渲染, 可用於阻擋子層組件重複render(物件的props)
- 複雜的計算, 阻止重複大量計算

### 範例

接續上面範例, 這次把` <MemoSwatch> `改為傳入物件形式, ex. ` <MemoSwatch params={{color}}>`,接著點 Re-Render App 按鈕可以看到子層的值沒有變化, 但又觸發Re-Render了

這是因為 React.memo 組件的值如果是屬於 primitive 型態會比較其 value, 如果是 object 型態則會比較其記憶體的位置, 而每次Re-Render後的記憶體位子都不相同, 所以就會造成 React.memo 失效.

- 解一

用 React.memo 的 prev, next 來比較新舊值變化

```jsx
// ...
const MemoSwatch = memo(Swatch, (prevProps, nextProps) => {
	return prevProps.params.color === nextProps.params.color
});
// ...
```

- 解二

要傳到子層的 params 用 useMemo 包起來比較

```jsx
// ...
const params = useMemo(() => ({ color }), [color]);
// ...
<MemoSwatch params={params} />
```

- 總覽

```jsx
import { useState, memo, useMemo } from "react";

function Swatch({ params }) {
  console.log(`Swatch rendered ${color}`)
  return (
    <div
      style={{
        margin: 2,
        width: 75,
        height: 75,
        backgroundColor: params.color
      }}
    ></div>
  );
}

const MemoSwatch = memo(Swatch);

export default function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");

  console.log("app render", { appRenderIndex });

  const params = useMemo(() => ({ color }), [color]);

  return (
    <div className="App">
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Re-Render App
      </button>
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        Change Color
      </button>

      <MemoSwatch param={param} />
    </div>
  );
}
```

## useCallback
### 定義

- 阻止畫面Re-Render造成同樣的function重複被Re-Render

### 範例

- 接續上面範例, 這次在` <MemoSwatch param={param} /> `再傳入一個 function,接著點 Re-Render App 按鈕可以看到子層又觸發Re-Render了

```jsx
// ...
<MemoSwatch param={param} onClick={() => {}}/> 
// ...
```

- 這是因為function 同樣在每次 Re-Render 都會是新的 function, 所以 memo 就又會失效

而這情況就能使用 useCallback 把 function 先包起來, 如此一來就能又再一次解決 Re-Render 問題

```jsx
// ...
const onClick = useCallback(() => {}, [])
// ...
<MemoSwatch params={params} onClick={onClick} />
```

- 總覽

```jsx
import { useState, memo, useMemo, useCallback } from "react";

function Swatch({ params }) {
  console.log("colorBox", params.color);
  return (
    <div
      style={{
        margin: 2,
        width: 75,
        height: 75,
        backgroundColor: params.color
      }}
    ></div>
  );
}

const MemoSwatch = memo(Swatch);

export default function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");

  console.log("app render", { appRenderIndex });

  const onClick = useCallback(() => {}, [])
  const params = useMemo(() => ({ color }), [color]);
  return (
    <div className="App">
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Re-Render App
      </button>
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        Change Color
      </button>

      <MemoSwatch params={params} onClick={onClick} />
    </div>
  );
}
```

## 小結

- memo(淺層比較) 組建比對props, 並且props是淺層比較, 不適用深層
- useMemo(深層比較) 陣列,物件
- useCallback(function比較)