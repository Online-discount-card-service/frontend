# "Скидывай" • фронтенд • ![Status in progress](https://badgen.net/badge/status/in%20progress/yellow)

## ![](https://badgen.net/static/React/18/gray) ![](https://badgen.net/static/React%20Router/6/gray) ![](https://badgen.net/static/Zustand/4/gray) ![](https://badgen.net/static/react-hook-form/7/gray) ![](https://badgen.net/static/Zod/3/gray) ![](https://badgen.net/static/MUI/5/gray) ![](https://badgen.net/static/Storybook/7/gray) ![](https://badgen.net/static/Vite/4/gray)

- [Фич лист](https://docs.google.com/spreadsheets/d/1GwV1-NoSkC2oHRamFoRoKfmjsDQTBtnCVACTTKllpCs/edit#gid=1450262909)

- [Дизайн](https://www.figma.com/file/3SieWKz3TaNqmqWhlz0dSt/Online-discount-card-service?type=design&node-id=41%3A2638&mode=design&t=eCfXjjFrXwwvUsxf-1)

## 🤖 Запуск проекта

```bash
## После клонирования репозитория необходимо установить зависимости. Во время разработки используем clean install:
npm ci
## Для запуска Vite в режиме разработки:
npm run dev
```

## 💾 Git

### 📦 Ветки

#### Шаблон

`[префикс]/[задача]`

#### Пример

- `feature/project-structure`
- `refactor/default-button`

### ✒️ Коммиты

```bash
## Для коммитов необходимо использовать комманду
npm run commit
```

### 📝 Слияние веток и пуллреквесты

- Название пуллреквеста должно совпадать с названием ветки
- Пуллреквест, не связанный с новой версией, должен откываться в ветку `develop`
- Октрытие, merge и удаление ветки делает тот кто работал над исходной веткой

### 📌 Варианты префиксов

Можно использовать как для веток и пуллреквестов, так и для коммитов (commitezen делает это самостоятельно).

#### Перечислены основные варианты:

- **feat**
- **fix**
- **refactor**
- **docs**
- **chore**

## Именование файлов и директорий

Для наименования файлов необходимо использовать PascalCase, а для директорий необходимо использовать kebab-case

### Примеры

- Директория `default-button`, `user`
- Файлы `App.tsx`, `DefaultForm.tsx`, `Form.ts`

## Экспорт компонентов

Используйте только именованные экспорты компонентов, поскольку при default export будут сложности с реэкспортом из модуля, и в любом случае при реэкспорте придется делать экспорт именованным.

## Структура директорий

> ⚠️ **Обратить внимение**
>
> Код из модуля не может быть использован в других модулях этого слоя или в нижнем слое, **только на уровне выше**. В случае недостаточности существующих слоев приложения можго обсудить чтобы добавить новые.

```
src
├── app // файлы верхнего уровня приложеня
│   ├── app.tsx
│   └── index.ts
├── pages // роутинг
│   ├── index.ts
│   └── ...
├── features // сущности, фичи
│   ├── feature-1
│   │   ├── index.ts
│   │   ├── lib
│   │   ├── ui
│   │   ├── api
│   │   └── model
│   ├── feature-2
│   ├── feature-3
│   └── ...
├── stories // story book
├── shared
│   ├── const
│   │   ├── index.ts
│   │   └── ...
│   ├── api
│   │   ├── index.ts
│   │   └── ...
│   ├── ui
│   │   ├── index.ts
│   │   └── ...
│   └── lib
│       ├── index.ts
│       └── ...
└── ...

```

## Деплой

### Для деплоя проекта:

```bash
## Для создания билда проекта с флагом --production
## такой билд грузится на сервер
npm run build

## Для создания билда проекта с флагом --development
## этот билд нужен для локального тестирования с бэкендом
npm run build-dev

## Для дефолтного превью билда
npm run preview

## Для превью билда на порту, запросы с которого пропускает бэкенд
npm run preview-dev
```

### Для деплоя Storybook:

```bash
## Для создания билда Storybook:
npm run predeploy

## Для деплоя билда в ветку gh-pages (которая отображается на GitHub Pages):
npm run deploy-storybook
```
