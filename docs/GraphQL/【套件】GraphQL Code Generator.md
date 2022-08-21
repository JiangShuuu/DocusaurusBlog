---
sidebar_position: 1
last_update:
  date: 2022/08/22
  author: JohnShuuu
tags: [GraphQL, API, 套件]
title: 【套件】GraphQL Code Generator
description: 使用 GraphQL Code Generator 自動編譯 TypeScript 所需的 type
---
# 【實作】Docker 製作網頁 image

## 前言

GraphQL 在前端使用 TypeScript 撰寫時必須手動撰寫 Type，雖然 GraphQL 有 schema 可以作為參考，但每條 API 要在開發時撰寫 Type 就有點太沒效率以及有失誤的可能性。~~( 當然，用 any 就可以解決這個問題 ）~~

而 GraphQL 可以根據 schema 來自動產生 API 文件，那有沒有可能前端也能根據 schema 來幫我們產生 Type 呢？

沒錯！GraphQL Code Generator 幫我們做到了！

## GraphQL Code Generator

[https://www.graphql-code-generator.com/docs/getting-started](https://www.graphql-code-generator.com/docs/getting-started)

[graphql-code-generator](https://www.graphql-code-generator.com/) 可以幫助我們自動從 schema 產生前端所需的 type, 而且並不局限於特定語言或框架, 相當方便

### 前置作業

`環境為 vue3 `

- 確認 vue/apollo 可正常使用

### 安裝

```jsx
yarn add graphql
yarn add -D @graphql-codegen/cli
```

### 設定獲取 schema 路徑的yml檔

```jsx
// codegen.yml

overwrite: true
schema: 
  - https://localhost/graphql
headers:
  Authorization: token

documents: 'src/graphql/*.gql'
generates:
  src/graphql/graphqlOperations.ts:
    plugins:
      - typescript
      - typescript-operations
      - typescript-vue-apollo
    config:
      withCompositionFunctions: true
      vueCompositionApiImportFrom: vue
```

- schema 指定獲取網址
- headers 若需要 token 則在這設定 Authorization
- documents 指定產生 query 的文件區域
- generates 指定產生 type 檔案的路徑
- plugins 指定產生 type 使用版本
- config 配置 vue 能直接呼叫的 function 以及 import 方式

### 指令產生

到 package.json 能看到指令

```json
"codegen": "graphql-codegen --config codegen.yml"
```

執行 yarn codegen

系統就會依照該資料夾內的gql檔案產生 function 以及 schema 所使用到的所有 type, 最後產生一支

graphqlOperation.ts 檔案.

### 使用

```jsx
// graphql/xxx.gql

query promotion($id: ID!) {
  promotion(id: $id) {
    id
    template
    title
  }
}
```

```js title="程式碼範例"
// xxx/xxx.vue
<script setup lang="ts">
import { usePromotionQuery, Promotion } from '~/graphql/graphqlOperations'

const paramsId = route.params.id.toString()

const result = ref<Promotion>()

const { loading, onError, onResult } = usePromotionQuery({ id: paramsId })

onResult((data) => {
  if (!data.data.promotion) {
    router.push('/404')
  }
  result.value = data.data.promotion as Promotion
})

onError((err) => {
  console.log('err', err)
  router.push('/404')
})

</script>
```

- [graphql-code-generator](https://www.graphql-code-generator.com/) 會自動從你指定資料夾裡的gql 產生對應的function 及 type
- 直接引入由 [graphql-code-generator](https://www.graphql-code-generator.com/) 產生的 ts 檔案
- usePromotionQuery 為產生的 function, Promotion 為產生的 type

## 結語

透過使用 `graphql-code-codegen` 產生的強型別 operation type，避免了人為的失誤，準確知道 response type，有效提升開發效率跟程式碼品質。