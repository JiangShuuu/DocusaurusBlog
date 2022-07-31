---
sidebar_position: 1
last_update:
  date: 2022/07/24
  author: JohnShuuu
tags: [vue2, vue-router, Nuxt2]
title: 【狀況】判斷外部 or 內部連結
description: 使用 computed 判斷內外部連結。
---
# 【狀況】判斷外部 or 內部連結
`環境為Nuxt2`

很多時後我們用router-link來完成頁面的跳轉, 當要跳到外部網站時使用a標籤。

但當 API 回傳的資料連結不確定是**外部還內部連結**時 router-link 就無法概括完成我們的需求，

此時最直接的做法是外層加上 v-if 來達到我們的目的，

但如果每頁都有這情況 v-if 看上去就會顯得比較雜亂，這時做成組件或許是個更好的選擇。

## 實作
```md title="拆解過程"
1. template 加入 a標籤 與 router-link
2. props 一個開口傳入連結
3. v-if判斷使用 a標籤 還 router-link
4. v-if條件判斷
```

```js title="AppLink.vue"
<template>
  <a v-if="isHttp" :href="to"><slot/></a>
  <NuxtLink v-else :to="to"><slot/></NuxtLink>
</template>

<script>
export default {
  name: 'AppLink',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  computed:{
    isHttp()  {
      return this.to.startsWith('http')
    }
  }
}
</script>
```
### 詳解
當連結經由props傳入此組件時, isHttp()會去判別 to 是否含有 http 字串。 

有的話則是 true , 使用 a 標籤，

沒有的話則 false, 使用 router-link，

:::tip

使用 `<slot/>` 是因為裡面可能會塞內容, 故連結包在最外層, 使用場景例如：

```js title="xxx.vue"
// ...
<AppLink :to="https://www.google.com/">
  <img src="/xxx.jpg">
	<p>點我看更多</p>
</AppLink>
// ...
```
:::
