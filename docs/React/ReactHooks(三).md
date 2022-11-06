---
id: react-hook-03
sidebar_position: 3
last_update:
  date: 2022/11/06
  author: JohnShuuu
tags: [react, hook]
title: ReactHooks (三)
description: React Hooks 學習筆記, 用範例快速理解, useContext, useReducer
---
# ReactHooks (三)

當遇到一個 State 需要跨頁面共用, 或者組件較為複雜需要 props 很多層的時候, 就能使用 useContext 來共享State,  

而當 State 的修改行為較為複雜時, 則可以使用 useReducer 來根據不同狀況更改 State

## useContext
### 定義

useContext 是 React 原生的狀態管理, 用於處理當一個狀態要跨頁面使用, 或者組件相當多層, 要傳遞很多層 props時, 就能使用 useContext 或者其他套件, 如: redux、zustand

### 定義方法

1. 定義一個值 = createContext(null)
2. 建立 contextStore 的 JSX , 放入要統一管理的值
3. 用一開始定義的值.provider 用value傳出去
4. 把剛剛建立好的 store 用 useContext 包起來定義一個名稱 (可省略)
5. 把會使用到的此狀態的組件用剛剛創好的JSX 包起來, 通常是 app.jsx
- example

```jsx
//// context.jsx
import { useReducer, useContext, createContext } from "react"

// step 01
const CounterContext = createContext(null);

// step 02
export const ContextStore = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  return (
	// step 03
    <CounterContext.Provider value={{ counter, addCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

// step 04
export const useCountStore = () => useContext(ContextStore)

//// App.jsx
// ...
// step 05
<ContextStore>
  <App />
</ContextStore>
// ...
```

### 使用方法

1. 接著就能在需要用到的組件上import 剛建立好的 store 並使用剛剛用value傳出來的值或method, 使用前需要用 useContext(store) 定義 (若有做第四步驟則直接引用)
- example

```jsx
//// a.jsx
import React, { useContext } from 'react'
import { ContextStore } from './context.jsx'

export default function A () {
	const { counter, addCounter } = useContext(ContextStore)
	return (
		<>
			<div>
				{counter}
			<div>
			<button onClick={addCounter}>Add</button>
		</>
	)
}
```

```jsx
//// b.jsx
import React, { useContext } from 'react'
import { useCountStore } from './context.jsx'

export default function A () {
	const { counter, addCounter } = useCountStore()
	return (
		<>
			<div>
				{counter}
			<div>
			<button onClick={addCounter}>Add</button>
		</>
	)
}
```

### 完整範例

[https://github.com/JiangShuuu/blog-post-example/blob/main/StateManager/src/pages/count/counter-ctx-use-state.jsx](https://github.com/JiangShuuu/blog-post-example/blob/main/StateManager/src/pages/count/counter-ctx-use-state.jsx)

## useReducer

### 定義

當 Context 的狀態需要比較複雜的處理時, 就能使用 useReducer 來根據不同的 type 執行不一樣的任務

### 定義方法

1. import useReducer
2. 定義 reducer type 事件
3. 將原本的 setCounter 改成 dispatch, 並把 useState 改成 useReducer
4. value 傳出 dispatch

```jsx
//// context.jsx
import { useReducer, useContext, createContext } from "react"

const CounterContext = createContext(null);

// step 0
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "reduce":
      return state - 1;
    default:
      return state;
  }
};

export const ContextStore = ({ children }) => {
  const [counter, dispatch] = useReducer(reducer, 0);
	
  return (
		// step 03
    <CounterContext.Provider value={{ counter, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCountStore = () => useContext(ContextStore)

//// App.jsx

// ...
<ContextStore>
  <App />
</ContextStore>
// ...
```

### 使用方法

1. 一樣透過 useContext 引入
2. dispatch 用 type 來改變 counter 的狀態

```jsx
//// a.jsx
import React, { useContext } from 'react'
import { ContextStore } from './context.jsx'

export default function A () {
	const { counter, dispatch } = useContext(ContextStore)
	return (
		<>
			<div>
				{counter}
			<div>
			<button onClick={() => dispatch({ type: "add" })}>
        Add One
      </button>
			<button onClick={() => dispatch({ type: "reduce" })}>
        Reduce One
      </button>
	  </>
	)
}
```

### 完整範例

[https://github.com/JiangShuuu/blog-post-example/blob/main/StateManager/src/pages/count/counter-ctx-use-reducer.jsx](https://github.com/JiangShuuu/blog-post-example/blob/main/StateManager/src/pages/count/counter-ctx-use-reducer.jsx)

## 缺點

使用原生的 useContext 跟 useReducer 來管理狀態雖然方便, 但會在每次更改 state 時, 有使用到 context 的組件全部都會重新 reRender一次,  

為了避免此情況, 則可以使用套件 use-context-selector, 或者直接改用 redux 或 zustand 來處理管理狀態