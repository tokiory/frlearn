import type { Day } from ".";

export default [
  {
    date: "2024-11-01",
    title: "[Day 1] Переменные, функции, типы данных",
    description:
      "Обсудим переменные, функции, типы данных, посмотрим на неявное преобразование типов данных, а также подробно разберем булеву алгебру",
    mindmap:
      "https://excalidraw.com/#json=MZyg63OHdQWHkWSk61wcZ,giCdP2DAP1_x2Ftxt2CIgg",
    references: [
      {
        name: "Дока: Порядок выполнения",
        url: "https://doka.guide/js/execution-order/",
      },
      {
        url: "https://doka.guide/js/var-let/",
        name: "Дока: Переменные",
      },
      {
        url: "https://doka.guide/js/if-else/",
        name: "Дока: Условия",
      },
      {
        name: "Дока: Функции",
        url: "https://doka.guide/js/function/",
      },
    ],
  },
  {
    date: "2024-11-08",
    title: "[Day 2] Циклы, булева алгебра, ссылочные типы данных",
    description:
      "Изучаем циклы for of, for in, использование базовых методов массивов и функциональное программирование",
    references: [
      {
        name: "Дока: Условия",
        url: "https://doka.guide/js/if-else/",
      },
      {
        name: "Дока: Хранение по ссылке и по значению",
        url: "https://doka.guide/js/ref-type-vs-value-type/",
      },
      {
        name: "Дока: Циклы",
        url: "https://doka.guide/js/loop/",
      },
      {
        name: "Дока: For",
        url: "https://doka.guide/js/for/",
      },
      {
        name: "Дока: While",
        url: "https://doka.guide/js/while/",
      },
      {
        name: "MDN: Array",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
      },
      {
        name: "W3Schools: Booleans",
        url: "https://www.w3schools.com/js/js_booleans.asp",
      },
      {
        name: "Javascript.ru: Методы массивов",
        url: "https://learn.javascript.ru/array-methods",
      },
    ],
    homework: [
      "Написать функцию для сложения 4-х чисел",
      "Написать функцию, которая выведет пирамидку",
      "Написать игру, где компьютер загадывает число, а пользователь пробует его угадать.",
      "Узнать что появилось первым (курица или яйцо), с помощью сортировки массива с эмодзи 🥚 и 🐓",
    ],
  },
  {
    date: "2024-11-15",
    title: "[Day 3] Коллбэки, методы массивов, рекурсия",
    future: true,
    description:
      "Изучаем стрелочные функции, коллбэки, методы массивов, рекурсивные алгоритмы, а также применяем знания на практике в разработке маленьких игр",
    references: [
      {
        name: "Дока: Функции",
        url: "https://doka.guide/js/function/",
      },
      {
        name: "MDN: Array",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
      },
      {
        name: "W3Schools: Callbacks",
        url: "https://www.w3schools.com/js/js_callback.asp",
      },
      {
        name: "Хекслет: Что такое callback-функция в JavaScript?",
        url: "https://ru.hexlet.io/blog/posts/javascript-what-the-heck-is-a-callback",
      },
      {
        name: "MDN: Callback function",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function",
      },
      {
        name: "MDN: Recursion",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Recursion",
      },
    ],
    homework: [
      "Написать программу, которая сортирует массив по убыванию и возрастанию",
    ],
  },
] as Day[];
