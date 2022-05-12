# KanalServis-test - тестовое задание
SPA, созданное в соответствии с ТЗ, в котором представлена таблица с данными и возможностью сортировки, фильтрацией и пагинацией.
____

## 1. Ссылка на готовое приложение:

https://alex-mercy.github.io/KanalServis-test/

## 2. Запуск приложения:
```
1) npm install
2) npm start
```
## 3. Технологии:
* ```Redux``` - стейт менеджер
* ```React-Router-Dom``` для роутинга
*  ```Redux Saga``` в качестве middleware
* ```Axios``` для асинхронных запросов
* ```json-Server``` в качестве REST Api
*  ```classnames``` для работы с классами

## 4. Описание приложения:

1. Таблица должна содержать 4 колонки:
    1. Дата
    2. Название
    3. Количество
    4. Расстояние
2. Таблица должна иметь сортировку по всем полям кроме даты. Фильтрация должна быть в виде двух выпадающих списков и текстового поля:
    1. Выбор колонки, по которой будет фильтрация
    2. Выбор условия (равно, содержит, больше, меньше)
    3. Поле для ввода значения для фильтрации
3. Таблица должна содержать пагинацию
4. Вся таблица должна работать без перезагрузки страницы.