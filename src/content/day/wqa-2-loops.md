---
session: winter-qa-js
date: 2024-11-08
title: "[Day 2] Циклы, булева алгебра, ссылочные типы данных"
references:
  - name: "Дока: Условия"
    url: "https://doka.guide/js/if-else/"
  - name: "Дока: Хранение по ссылке и по значению"
    url: "https://doka.guide/js/ref-type-vs-value-type/"
  - name: "Дока: Циклы"
    url: "https://doka.guide/js/loop/"
  - name: "Дока: For"
    url: "https://doka.guide/js/for/"
  - name: "Дока: While"
    url: "https://doka.guide/js/while/"
  - name: "MDN: Array"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
  - name: "W3Schools: Booleans"
    url: "https://www.w3schools.com/js/js_booleans.asp"
  - name: "Javascript.ru: Методы массивов"
    url: "https://learn.javascript.ru/array-methods"
homework:
  - "Написать функцию для сложения 4-х чисел"
  - "Написать функцию, которая выведет пирамидку"
  - "Написать игру, где компьютер загадывает число, а пользователь пробует его угадать."
  - "Узнать что появилось первым (курица или яйцо), с помощью сортировки массива с эмодзи 🥚 и 🐓"
---

<!-- Изучаем циклы for of, for in, использование базовых методов массивов и функциональное программирование -->

# Циклы

В рамках данного урока изучили основные циклы, такие как `for`, `while`, `for of`, `for in`:

```js
// Полный цикл (с инициализацией)
for (let i = 0; i < 10; i++) {/* ... */}

// Цикл с предусловием без инициализации
while (i < 10) {/* ... */}

// Цикл по итерируемым обхектам
for (const element of array) {/* ... */}

// Цикл по ключам
for (const key in object) {/* ... */}
```

# Массивы

Также, рассмотрели инициализацию массивов, обращение по индексам и несколько методов массивов:

```js
const arr = ["hello", "world", "here", "am", "i"]

console.log(arr[2]) // "here"

// Reverse
console.log(arr.reverse()) // ["i", "am", "here", "world", "hello"]

// Slice
console.log(arr.slice(1,3)) // ["world", "here"]

// Sort
console.log(arr.sort()) // ["am", "here", "hello", "i", "world"]
```