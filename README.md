# Halogenn - Página Inicial Responsiva

Esta é uma página inicial responsiva desenvolvida para uma empresa que comercializa produtos químicos e acessórios, como parte de um teste freelancer.
![image](https://github.com/DrZanuff/test-linklab/assets/23051495/551a4de0-c187-46da-a9c1-01db407d27e2)

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
[Link do Projeto na Vercel](https://test-linklab-drzanuff.vercel.app/)

## Mock de Produtos

Os dados dos produtos são obtidos de um mock online, semelhante ao mocky.io. As requisições são realizadas em SSR + React Query para a obtenção inicial dos dados do produto.

## Estrutura do Projeto

A estrutura do projeto é simples, concentrando-se na página inicial da Halogenn. O menu dropdown é implementado tanto para desktop quanto para dispositivos móveis, utilizando componentes separados. O projeto adota a nova estrutura de rotas do App Router introduzida no Next.js 13. A requisição dos produtos é gerenciada utilizando React Query no SSR, com revalidação de cache e hidratação de dados. O controle de estado do dropdown do header é realizado através do Redux.
