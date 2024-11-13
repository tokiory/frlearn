---
session: winter-qa-js
date: 2024-11-15
title: "[Day 3] Коллбэки, методы массивов, рекурсия"
future: true
references:
  - name: "Дока: Функции"
    url: "https://doka.guide/js/function/"
  - name: "MDN: Array"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
  - name: "W3Schools: Callbacks"
    url: "https://www.w3schools.com/js/js_callback.asp"
  - name: "Хекслет: Что такое callback-функция в JavaScript?"
    url: "https://ru.hexlet.io/blog/posts/javascript-what-the-heck-is-a-callback"
  - name: "MDN: Callback function"
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"
  - name: "MDN: Recursion"
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Recursion"
homework:
  - "Написать программу, которая сортирует массив по убыванию и возрастанию"
---

Изучили стрелочные функции, коллбэки, рекурсивные алгоритмы, а также применили знания на практике в разработке маленьких игр

# Стрелочные функции
**Стрелочные функции** — это более короткий и удобный способ записи функций в JavaScript.

```javascript
// Обычная функция
function greet(name) {
  return `Hello, ${name}!`;
}

// Стрелочная функция, которая сразу возвращает значение
const greet = (name) => `Hello, ${name}!`;

// Стрелочная функция с несколькими параметрами
const add = (a, b) => a + b;

// Стрелочная функция с телом
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
```

# Коллбэки
**Коллбэки** — это функции, которые передаются в другие функции в качестве аргументов и вызываются внутри этих функций. Они широко используются для обработки асинхронных операций и работы с массивами.

```javascript
// Функция, принимающая коллбэк
function processArray(arr, callback) {
  arr.forEach(callback);
}

// Коллбэк-функция
const printElement = (element) => {
  console.log(element);
};

// Использование коллбэка
processArray([1, 2, 3, 4], printElement);
```

# Рекурсивные алгоритмы
**Рекурсивные алгоритмы** — это алгоритмы, которые решают задачу путем решения более простых подзадач той же задачи. Они часто используются для решения задач, которые можно разбить на более мелкие подзадачи.

```javascript
// Рекурсивная функция для вычисления факториала
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Рекурсивная функция для вычисления чисел Фибоначчи
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8
```