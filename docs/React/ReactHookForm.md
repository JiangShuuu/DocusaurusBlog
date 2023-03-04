---
id: react-hook-form
sidebar_position: 9
last_update:
  date: 2022/03/04
  author: JohnShuuu
tags: [react, react-hook-form, verify, form]
title: 【套件】React-Hook-Form
description: React 學習筆記, 用範例快速理解 React-Hook-Form
---
## 簡介

React Hook Form，用於管理表單輸入，並使用React的Hooks 。它可以讓你更容易地管理表單輸入，同時簡化了驗證和錯誤處理的過程。

React Hook Form有很多優點，其中一個是它的性能。它可以在大型表單中快速處理數據，並且在渲染組件時不會產生額外的性能負擔。此外，它還有很多可定制的選項，可以根據你的需求進行調整。

### React Hook Form 有以下重要的 Methods ：

1. useForm hook: 用於註冊表單，創建一個表單實例。在這裡你可以定義表單的配置選項，例如驗證規則，表單默認值等。
2. useFormContext hook: 用於訪問全局表單上下文，可以在表單實例的所有子組件中使用。
3. register: 用於註冊表單控件，例如輸入框、下拉列表等。它可以將輸入控件的值與表單實例關聯起來。
4. handleSubmit: 用於處理表單提交事件，並在提交之前驗證表單輸入的數據。
5. errors: 包含表單輸入驗證錯誤的對象。如果輸入框中的值無效，則將在這裡添加相應的錯誤信息。
6. watch: 用於監聽表單控件的值，當值改變時，它可以觸發一些副作用。
7. setValue: 用於對監聽的對象直接設定輸入
8. resetField: 用於對監聽的對象清除當前輸入內容
9. reset: 用於對監聽的所有對象清除當前輸入內容
10. clearErrors: 用於清除 Errors 提示
11. formState 為object, 可取出 { errors, isSubmitting } 兩種值
12. useForm 除了可以插入 resolver 改變語系以外, 也能改變 onSubmit 模式 mode: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all',

### 簡單案例

下面是一個簡單的例子，如何使用React Hook Form創建一個表單：

```jsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  firstName: string;
  lastName: string;
};

export default function MyForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  console.log(watch('firstName'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register('firstName', { required: true })} />
      {errors.firstName && <span>This field is required</span>}
      <input type='text' {...register('lastName', { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <button type='submit'>Submit</button>
    </form>
  );
}
```

在這個例子中，我們使用了useForm hook來創建一個表單實例。我們還使用了register方法來註冊輸入框，並使用required屬性來設置輸入框的必填性。如果輸入框中沒有值，則會在errors對象中添加相應的錯誤信息。
最後，我們使用handleSubmit方法來處理表單提交事件，並將表單數據作為參數傳遞給onSubmit回調函數。

## 配合多國語言(以yup為例)

### 初始化 i18n 設定

```jsx
// /plugins/formI18n.ts

import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
	 resources: {
      hans: {
        translation: {
					"不可空白": "请输入至少一个简体",
				}
      },
      hant: {
        translation: {
					"不可空白": "請至少輸入一個繁體",
				}
      }
    },
    lng: 'hans', 
    fallbackLng: 'hans',

    interpolation: {
      escapeValue: false
    }
  });

export function FormI18n () {
  const { changeLanguage, language } = i18n;

  const { t } = useTranslation();

  const changTest = language === 'hans' ? 'hant' : 'hans';

  const toggleLanguage = () => changeLanguage(changTest)

  return {t, toggleLanguage, language}
}

```

### 接著將 yup 引入組件, 並設定指定表格的 schema

```jsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormI18n } from '../../plugins/formI18n';
import * as yup from 'yup';

interface IFormInputs {
  firstName: string;
  age: number;
}

export default function App() {
  const { t, toggleLanguage, language } = FormI18n();

  const schemaI18n = yup.object({
    firstName: yup.string().required(`${t('不可空白')}`)
  });

  // ...
}
```

### 最後在 useForm({ resolver }) 添加 yupResolver 將剛設定好的 schema 注入

```jsx
// .....
export default function App() {
	// .....

	const {
	  register,
	  handleSubmit,
	  setValue,
	  resetField,
	  reset,
	  clearErrors,
	  formState: { errors, isSubmitting }
	} = useForm<IFormInputs>({
	  resolver: yupResolver(schemaI18n)
	})

	const onSubmit = (data: IFormInputs) => {
      console.log(data);
    };

  // .....
}

```

### 範例附上其他常用 Methods 如下方按鈕備註

```jsx
// .....
return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} />
        <p>{errors.firstName?.message}</p>

        <input {...register('age')} />
        <p>{errors.age?.message}</p>

        <button disabled={isSubmitting} type='submit'>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <div style={{ margin: '1rem' }}>
        <button style={{ margin: '0 1rem' }} onClick={() => setValue('firstName', '點選填入字串')}>
          點選填入字串
        </button>
        <button onClick={() => resetField('firstName')}>清除指定input</button>
      </div>
      <div style={{ margin: '1rem' }}>
        <button style={{ margin: '0 1rem' }} onClick={() => reset()}>
          清除所有input
        </button>
        <button onClick={toggleLanguage}>更換語言 {language}</button>
      </div>
      <div style={{ margin: '1rem' }}>
        <button style={{ margin: '0 1rem' }} onClick={() => clearErrors()}>
          清除錯誤
        </button>
      </div>
    </>
  );
```

## 完整範例程式碼

```jsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormI18n } from '../../plugins/formI18n';
import * as yup from 'yup';

interface IFormInputs {
  firstName: string;
  age: number;
}

export default function App() {
  const { t, toggleLanguage, language } = FormI18n();

  const schemaI18n = yup.object({
    firstName: yup.string().required(`${t('不可空白')}`)
  });

  const {
    register,
    handleSubmit,
    setValue,
    resetField,
    reset,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<IFormInputs>({
    resolver: yupResolver(schemaI18n)
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} />
        <p>{errors.firstName?.message}</p>

        <input {...register('age')} />
        <p>{errors.age?.message}</p>

        <button disabled={isSubmitting} type='submit'>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <div style={{ margin: '1rem' }}>
        <button style={{ margin: '0 1rem' }} onClick={() => setValue('firstName', '點選填入字串')}>
          點選填入字串
        </button>
        <button onClick={() => resetField('firstName')}>清除指定input</button>
      </div>
      <div style={{ margin: '1rem' }}>
        <button style={{ margin: '0 1rem' }} onClick={() => reset()}>
          清除所有input
        </button>
        <button onClick={toggleLanguage}>更換語言 {language}</button>
      </div>
      <div style={{ margin: '1rem' }}>
        <button style={{ margin: '0 1rem' }} onClick={() => clearErrors()}>
          清除錯誤
        </button>
      </div>
    </>
  );
}
```