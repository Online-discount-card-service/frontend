# Online Discount Card Service Frontend

- [Фич лист](https://docs.google.com/spreadsheets/d/1GwV1-NoSkC2oHRamFoRoKfmjsDQTBtnCVACTTKllpCs/edit#gid=1450262909)

- [Дизайн](https://www.figma.com/file/3SieWKz3TaNqmqWhlz0dSt/Online-discount-card-service?type=design&node-id=41%3A2638&mode=design&t=eCfXjjFrXwwvUsxf-1)

- [Storybook](https://online-discount-card-service.github.io/odcs-frontend)

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

#### Примеры

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

## Деплой Storybook

```bash
## Для создания билда Storybook:
npm run predeploy
## Для деплоя билда в ветку gh-pages (которая отображается на GitHub Pages):
npm run deploy-storybook
```
