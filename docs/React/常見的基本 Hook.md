---
id: react-hook-base
sidebar_position: 1
last_update:
  date: 2022/10/22
  author: JohnShuuu
tags: [react, hook]
title: 那些常見的Hook(基本)
description: React Hook 學習筆記, 用範例快速記憶
---
# 那些常見的Hook(基本)
Hook 是從 React 16.8 開始新增的功能,  

最大的特點就是不用寫 class 就能使用 state 以及其他 React 的功能,  

此系列用範例記錄每個 Hook 的使用場景

## useState

### 定義

- 用於宣告變數
- 相當於 class constructor 裡的 this.state
- 不要直接改變 state 的值, 使用 set() 去改變 state的值

### 範例

- 每次點擊, count + 1

```jsx
import React, { useState } from 'react';

function Example() {
  // 宣告一個新的 state 變數，我們稱作為「count」。
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## useEffect

### 定義

- 用於組件三個階段的監控, '創建', '更新', '摧毀'
- 相當於 componentDidMount，componentDidUpdate 和 componentWillUnmount 的組合

### 範例

每秒計數器

```jsx
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const inc = () => setCount(count + 1);
  const desc = () => setCount(count - 1);
  const timerStart = () => setStart(true);
  const timerStop = () => setStart(false);

  useEffect(() => {
		// 組建重新渲染後會根據start的狀態決定是否往下執行
		// 相當於 componentDidMount
    if (!start) {
      return;
    }

    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
		
		// 組建摧毀前會執行 return 內的事項
		// 相當於 componentWillUnmount
    return () => clearInterval(id);
  }, []);

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={inc}>Inc</button>
      <button onClick={desc}>Desc</button>
      <button onClick={timerStart}>Start</button>
      <button onClick={timerStop}>Pause</button>
    </div>
  );
}
```

### 依賴項

- 不加 [] 會在 componentDidMount、componentDidUpdate(props, state 等變化)時執行
- 加 [] 只在componentDidMount執行
- 加特定值[] 會在 componentDidMount、特定值改變時執行

useEffect第二層可以監控value的變化去觸發事件, 而監控的是value的內存位置,

以物件來說, 只改變第二層會使得 useEffect 沒辦法觸發, 因爲內存位置是一樣的,

所以要把依賴項直接指名在第二層的 value, 如：

```jsx
import { useState, useEffect } from 'react'

function Child(props) {
  
  useEffect(() => {
    console.log("useEffect");
  }, [props.data]); // << 無法觸發, 要改成 props.data.x
  
  return <div>{props.data.x}</div>;
}

let b = { x: 1 };

export default function App() {
  const [count, setCount] = useState(0);
  console.log("render");
  return (
    <div>
      <button
        onClick={() => {
          b.x = b.x + 1;
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <Child data={b} />
    </div>
  );
}
```

## useRef

### 定義

- 用於控制 Dom 的 Hook

### 範例

- 點擊 button, input focus

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>);
}
```

## React.forwardRef

### 定義

- 用於跨父子組件溝通(以本身Dom為主), 把組件變成父層可操控的ref

### 範例

- 接續 useRef, 將 input 放到子層 CustomInput, 並嘗試在父層 App 觸發子層 input

```jsx
// CustomInput
import React from "react"

function CustomInput({ ...props }, ref) {
  return (
    <input 
      ref={ref}
      {...props}
    />
  );
}

export default React.forwardRef(CustomInput)

// App

import { useState, useRef } from "react";
import CustomInput from "./CustomInput"

export default function App() {
  const [value, setValue] = useState('red')
  const inputRef = useRef()

  return (
    <>
    <CustomInput 
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    <br/>
    <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
```

## useImperativeHandle

### 定義

- 讓父層直接操控定義在子層事件(自訂事件及多個數量)

### 範例

- 接續上方範例, 子層新增多個自訂事件, 父層觸發子層事件

```jsx
// CustomInput

import React, { useImperativeHandle } from "react"

function CustomInput({ ...props }, ref) {

  useImperativeHandle(ref, () => {
    return { 
      alertHi: () => alert(props.value),
      sayHi01: () => alert('Hi01'),
      sayHi02: () => alert('Hi02'),
    }
  })

  return (
    <input 
      ref={ref}
      {...props}
    />
  );
}

export default React.forwardRef(CustomInput)

// App

import { useState, useRef } from "react";
import CustomInput from "./CustomInput"

export default function App() {
  const [value, setValue] = useState('red')
  const inputRef = useRef()

  return (
    <>
    <CustomInput 
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    <br/>
    <button onClick={() => inputRef.current.alertHi()}>alertHi</button>
    <button onClick={() => inputRef.current.sayHi01()}>SayHi01</button>
    <button onClick={() => inputRef.current.sayHi02()}>SayHi02</button>
    </>
  );
}
```