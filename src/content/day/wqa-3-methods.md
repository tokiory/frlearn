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

Изучили стрелочные функции, коллбэки, вложенные циклы, работу со строками, рекурсивные алгоритмы, а также применили знания на практике в разработке маленьких игр

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

# Вложенные циклы
**Вложенные циклы** — это циклы, которые находятся внутри других циклов. Они используются для выполнения сложных итераций, таких как обработка многомерных массивов или генерация таблиц.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
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

# Методы типов
JavaScript предоставляет множество встроенных методов для работы с различными типами данных, такими как массивы, объекты и числа.

## Методы массивов
- `push(element)`: Добавляет элемент в конец массива.
- `pop()`: Удаляет последний элемент массива и возвращает его.
- `map(callback)`: Создает новый массив, применяя функцию коллбэк к каждому элементу исходного массива.
- `filter(callback)`: Создает новый массив, содержащий все элементы, для которых функция коллбэк возвращает true.
- `reduce(callback, initialValue)`: Применяет функцию коллбэк к каждому элементу массива, возвращая одно значение.

Примеры использования методов массивов:

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

const lastNumber = numbers.pop();
console.log(lastNumber); // 6

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

## Методы чисел
- `toFixed(digits)`: Возвращает строку, представляющую число с указанным количеством десятичных знаков.
- `toPrecision(digits)`: Возвращает строку, представляющую число с указанным количеством значащих цифр.
- `toString(radix)`: Возвращает строку, представляющую число в указанной системе счисления.
Примеры использования методов чисел:

```javascript
const num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toString(2)) // // "1111011.0111110011001101...
```

## Методы строк
- `charAt(index)`: Возвращает символ по индексу.
- `substring(start, end)`: Возвращает подстроку.
- `split(separator)`: Разделяет строку на массив подстрок.
- `includes(searchString)`: Проверяет наличие подстроки.

Примеры использования методов строк:

```javascript
const str = "Hello, World!";
console.log(str.charAt(4)); // "o"
console.log(str.slice(1, 4)); // "ell"
console.log(str.split(", ")); // ["Hello", "World!"]
console.log(str.includes("World")); // true
```