# Halogenn - Página Inicial Responsiva

Esta é uma página inicial responsiva desenvolvida para uma empresa que comercializa produtos químicos e acessórios, como parte de um teste freelancer.

## Tecnologias Utilizadas

- [Next.js 13](https://nextjs.org/)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [React Query](https://tanstack.com/query/latest/)

## Configuração e Execução Local

Para rodar o projeto localmente, siga os passos abaixo:

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3 . O projeto estará disponível em http://localhost:3000.

## Visualização Online

Você também pode visualizar o projeto online através da Vercel:
Link do Projeto na Vercel

## Mock de Produtos

Os dados dos produtos são obtidos de um mock online, semelhante ao mocky.io. As requisições são realizadas em SSR + React Query para a obtenção inicial dos dados do produto.

## Estrutura do Projeto

A estrutura do projeto é simples, concentrando-se na página inicial da Halogenn. O menu dropdown é implementado tanto para desktop quanto para dispositivos móveis, utilizando componentes separados. O projeto adota a nova estrutura de rotas do App Router introduzida no Next.js 13. A requisição dos produtos é gerenciada utilizando React Query no SSR, com revalidação de cache e hidratação de dados. O controle de estado do dropdown do header é realizado através do Redux.

# Redux Toolkit TypeScript Example

This example shows how to integrate Next.js with [Redux Toolkit](https://redux-toolkit.js.org).

The **Redux Toolkit** is a standardized way to write Redux logic (create actions and reducers, setup the store with some default middlewares like redux devtools extension). This example demonstrates each of these features with Next.js

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-redux&project-name=with-redux&repository-name=with-redux)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-redux with-redux-app
```

```bash
yarn create next-app --example with-redux with-redux-app
```

```bash
pnpm create next-app --example with-redux with-redux-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
