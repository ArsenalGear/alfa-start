# Ошибка на все приложение 

PageLoader 
src/index.tsx

## Ошибка на центральную часть приложения

ServiceErrorBoundary 
src/components/custom-components/ErrorBoundaries/ServiceErrorBoundary/ServiceErrorBoundary.tsx
src/components/custom-components/layout/MainLayout/MainLayout.tsx

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Запуск в контейнере
При запуске приложения в докер контейнере необходимо задать значения следующим переменным окружения 
* EXCHANGE_API_HOST - хост API сервера
* EXCHANGE_API_PATH - префикс пути для API

Таким образом все относительные запросы на /api/** будут проксироваться на EXCHANGE_API_HOST/EXCHANGE_API_PATH/** 

ля запуска сборки React локально после выполнения команды npm run build необходимо использовать сервер для раздачи статических файлов. Вот как можно выполнить эту задачу:

    Убедитесь, что вы уже выполнили команду npm run build в корневой папке вашего проекта React. Эта команда создает оптимизированную сборку проекта в папке build.

    Установите пакет serve глобально, если вы еще не сделали этого. Выполните следующую команду:

npm install -g serve

    Перейдите в папку build, которая содержит собранные статические файлы:

bash

cd build

    Запустите локальный сервер с помощью команды serve:

serve
