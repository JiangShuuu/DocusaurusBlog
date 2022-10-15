---
id: vue-router-link
sidebar_position: 4
last_update:
  date: 2022/10/08
  author: JohnShuuu
tags: [vue3, vue-router]
title: 那些 Vue-router 好用的功能
description: 記錄 Vue-router 好用的功能
---
# 那些 Vue-router 好用的功能 
`環境為 vite + vue3`
## Layout切換

### 建立layouts

使用vue-router meta 建立兩種不同的layout

```jsx
// /src/layouts/default.vue

<template>
  <main>
    <nav>
      <h1>Default Layout</h1>
      <router-link to="/member">to member layout</router-link>
    </nav>
    <section>
      <router-view></router-view>
    </section>
  </main>
</template>

// /src/layouts/member.vue

<template>
  <main>
    <nav>
      <h1>Member Layout</h1>
      <router-link to="/">to default layout</router-link>
    </nav>
    <section>
      <router-view></router-view>
    </section>
  </main>
</template>

```

### main.ts 引入 layouts

將剛剛建立好的layout用componet載入

```jsx
// main.js

// ...
import DefaultLayout from './layouts/default.vue'
import MemberLayout from './layouts/member.vue'

const app = createApp(App)
app.component('default-layout', DefaultLayout)
app.component('member-layout', MemberLayout)
// ...
```

### router.ts meta切換

到對應的route設定meta, 用於切換不同layout

```jsx
// /src/route/index.ts

// ...

{
  path: '/member',
  name: 'member',
  component: () => import('../views/member.vue'),
  meta: {
    layout: 'member',
  },
}

// ...
```

### App.vue component :is 切換

- 定義一個 layout 空值
- watch route 每次變化, layout 會依照目前的 route 有沒有對應的 meta.layout
- 有則切換對應layout
- 無則維持default-layout
- 最後用component is 包 router-view

```jsx
<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const layout = ref()

watch(route, () => {
  layout.value = route.meta.layout ? `${route.meta.layout}-layout` : 'default-layout'
})

</script>
```

## 麵包屑

使用vue-router meta 建立麵包屑

### 定義router meta title

```jsx
// /src/route/index.ts

// ...

{
  path: '/member',
  name: 'member',
  component: () => import('../views/member.vue'),
  meta: {
    layout: 'member',
		title: '會員專區'
  },
	children: [
    {
      path: '/member/info',
      name: 'info',
      component: () => import('../components/member/Info.vue'),
      meta: { title: '會員資訊' }
    },
    {
      path: '/member/account',
      name: 'account',
      component: () => import('../components/member/account.vue'),
      meta: { title: '會員帳戶' }
    },
    {
      path: '/member/payment',
      name: 'payment',
      component: () => import('../components/member/payment.vue'),
      meta: { title: '會員支付' }
    }
  ]
}

// ...
```

### 建立麵包屑組件

- 建立 function , 用於獲取route資訊並且用concat連成陣列
- watch route 每次變化就呼叫 function
- v-for render資料
- 設定偽元素隔開

```jsx
// /src/components/breadCrumb.vue

<template>
  <ol class="flex items-center mx-3 mt-5 space-x-2 text-sm text-gray-500 cursor-pointer md:mx-10">
    <li v-for="(item, i) in breadcrumbList" :key="i" class="pl-2">
      <router-link :to="item.path">{{ item.meta.title }}</router-link>
    </li>
  </ol>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbList = ref()

watch(route, () => {
  getBreadcrumbs()
})
onMounted(() => {
  getBreadcrumbs()
})

const getBreadcrumbs = () => {
  let matched:any = route.matched

  matched = [{ path: '/', meta: { title: '首頁' } }].concat(matched)

  breadcrumbList.value = matched
}

</script>

<style lang="postcss" scoped>
  li::after {
    content: '/';
    @apply ml-4;
  }
  li:last-child::after {
    content: '';
  }
</style>
```

## linkExactActiveClass

### router 建立 linkExactActiveClass

```jsx
// /src/route/index.ts

// ...

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'vue-active-link',

	// ...

})

export default router
```

### 全域css新增link-exact-active-class

```json
// /src/style.css

// ...

.vue-active-link {
  color: red;
  border-bottom: 2px solid red;
}
```

## 範例
https://jiangshuuu.github.io/vue-router-test/
### github repo
https://github.com/JiangShuuu/vue-router-test/