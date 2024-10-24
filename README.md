Этот проект создан на основании шаблонного проекта <https://git.moscow.alfaintra.net/projects/EJM/repos/alfalife-stab-remote-front/browse>

Документация находится тут: <https://git.moscow.alfaintra.net/projects/EJM/repos/readme-front/browse/README.md>

## Старт нового проекта: :rocket:

Вам необходимо склонировать репозиторий на свой компьютер, выполнить `yarn install` и для очистки от примеров кода запустить:

```sh
node remove-examples.mjs
```

Потом заменить в `package.json` поля `name` и `moduleFederation.exposes` на нужные

## Как запустить?

```sh
yarn start
npm start
```

## Как собрать?

```sh
yarn build
npm run build
```

# Запуск сборки на локалке после билда
### `npm install -g serve` - установка сервера
### `npm run serve` - запуск сервера

# Файлы конфигурации для прода
### .env файл 
### `REACT_APP_API_URL` - пример переменной для хоста бэка


### Дополнительно запустить alfalife-stab-remote-middle <https://git.moscow.alfaintra.net/projects/EJM/repos/alfalife-stab-remote-middle/browse>

```sh
yarn start:mock
```

## Как открыть?

- Десктопная версия будет доступна по <http://localhost:8080/>
- Мобильная версия будет доступна по <http://localhost:8080/mobile.html>

## Если при подключении как remote возникает ошибка `cannot read properties of undefined (reading 'init')`

то необходимо закомментировать код в `arui-scripts.overrides.js`

```ts
config.optimization.runtimeChunk = 'single';
```
