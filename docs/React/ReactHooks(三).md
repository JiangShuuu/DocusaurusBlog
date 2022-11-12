---
id: react-hook-03
sidebar_position: 3
last_update:
  date: 2022/11/06
  author: JohnShuuu
tags: [react, hook]
title: ReactHooks useContext 
description: React Hooks 學習筆記, 用範例快速理解, useContext
---
# ReactHooks(三)- useContext 
## 定義

useContext 用於當 value 要透過 props 向下傳遞多層時, 即可使用 useContext.

## 使用方法

1. 定義一個值 = createContext(null)
2. 建立 contextStore 的 JSX , 放入要統一管理的值
3. 用一開始定義的值.provider 用value傳出去
4. 把剛剛建立好的 store 用 useContext 包起來定義一個名稱 (可不做)
5. 把會使用到的此狀態的“父層”組件用剛剛創好的JSX 包起來

## 範例

假設子層child裡放了一個childNav, childNav會根據父層的 colorChange 做顏色變化, 而控制鈕放在 childNav 裡面的 childButton

檔案結構會是：畫面 App ; 組件 child > childNav > childButton

### step01: 建立context

```jsx
// context/ColorContext.jsx

import React, { useState, useContext, createContext } from 'react';

export const MenuContexts = createContext(null)

export const MenuProvider = ({ children }) => {
  const [colorChange, setColorChange] = useState(false)

  const toggleColor = () => {
    setColorChange(!colorChange)
  }

  return (
    <MenuContexts.Provider value={{ colorChange, toggleColor }}>
      {children}
    </MenuContexts.Provider>
  )
}

export const useColorToggleContext = () => useContext(MenuContexts)
```

### step02:  在父層 App 裝上 Provider

```jsx
// App.jsx

import './App.css'
import Child from './components/Child'
import { MenuProvider } from './context/ColorContext'

function App() {
  return (
    <div className="App">
      <Child />
    </div>
  )
}

export default function Index () {
  return (
    <MenuProvider>
      <App />
    </MenuProvider>
  )
}
```

### step03: 在Child組件內需要用到的地方引用

```jsx
// components/ChildNav.jsx

import React from 'react'
import { useColorToggleContext } from '../context/ColorContext'
import ChildButton from './ChildButton'

export default function ChildNav() {
  const { colorChange } = useColorToggleContext()

  const color = colorChange ? { color: 'red' } : { color: 'blue' }

  return (
    <div>
      <h1 style={color}>
        ChildNav
      </h1>
      <ChildButton />
    </div>
  )
}
```

```jsx
// components/ChildButton.jsx

import React from 'react'
import { useColorToggleContext } from '../context/ColorContext'

export default function ChildButton() {
  const { toggleColor } = useColorToggleContext()
  return (
    <button onClick={toggleColor}>ChildButton</button>
  )
}
```
### 範例連結

[https://github.com/JiangShuuu/blog-post-example/tree/main/useContext](https://github.com/JiangShuuu/blog-post-example/tree/main/useContext)

### 結論

這樣就完成了, 可以發現在畫面App.jsx 這支檔案中引用的 Child.jsx 並沒有傳遞任何props, 但是透過 useContext, 可以在任意子層共用同一組狀態
```jsx
import React from 'react'
import ChildNav from './ChildNav'

export default function Child() {
  return (
    <div>
      <div>Child</div>
      <ChildNav />
    </div>
  )
}
```

## 小結&需要注意的點

根據 useContext 可以多層次傳遞的特性可以很容易聯想到或許可以拿來做 StateManager, 如 Redux, Zustand.

而搭配 useReducer 的確可以做到跟 StateManager 相同的事情, 但是 useContext 的值一但改變, 有使用到 useContext 的組件全部都會 ReRender一次

雖然官方並沒有特別阻止我們拿來做狀態管理, 甚至有人為了解決 ReRender 問題, 開發了 useContextSelector 來解決, 但根據 useContext 被發明的初衷, 還是讓他們各司其職吧！