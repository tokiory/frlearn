---
session: winter-qa-js
date: 2024-11-01
title: "[Day 1] Переменные, функции, типы данных"
mindmap: "https://excalidraw.com/#json=MZyg63OHdQWHkWSk61wcZ,giCdP2DAP1_x2Ftxt2CIgg"
references:
  - name: "Дока: Порядок выполнения"
    url: "https://doka.guide/js/execution-order/"

  - name: "Дока: Переменные"
    url: "https://doka.guide/js/var-let/"

  - name: "Дока: Условия"
    url: "https://doka.guide/js/if-else/"

  - name: "Дока: Функции"
    url: "https://doka.guide/js/function/"

---

На первом дне нашего курса мы обсудим основные понятия программирования на JavaScript.
Мы начнем с изучения переменных, функций и типов данных. Данное занятие является вводным и содержит в себе основной теоретический минимум.


# Переменные

**Переменные** — это контейнеры для хранения данных, которые можно изменять в процессе выполнения программы.

Переменные объявляются с помощью ключевых слов `let`, `const` и `var`.

```javascript
let name = "John"; // Переменная с именем name, содержащая строку "John"
const age = 30; // Константа с именем age, содержащая число 30
var isStudent = true; // Переменная с именем isStudent, содержащая булево значение true
```


# Функции

**Функции** — это блоки кода, которые выполняют определенные задачи и могут быть вызваны многократно.
Функции могут быть объявлены с помощью ключевого слова `function` или стрелочных функций.

```javascript
// Обычная функция
function greet(name) {
    return "Hello, " + name + "!";
}

// Стрелочная функция
const greetArrow = (name) => {
    return "Hello, " + name + "!";
};

console.log(greet("Alice")); // Вывод: Hello, Alice!
console.log(greetArrow("Bob")); // Вывод: Hello, Bob!
```

# Типы данных
JavaScript поддерживает такие типы данных, как:

```javascript
let number = 42; // Число
let text = "Hello, World!"; // Строка
let isTrue = true; // Булево значение
let array = [1, 2, 3, 4, 5]; // Массив
let object = { name: "John", age: 30 }; // Объект
```
