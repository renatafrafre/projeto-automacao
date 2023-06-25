# Automatizando o módulo compras
Projeto Integrador II - Renata Fraga de Freitas
## Estrutura de arquivos:

> A suíte de testes fica no diretório cypress/e2e/spec.cy.ts

```
├── cypress
│   ├── e2e
│   │   ├── spec.cy.ts
│   ├── fixtures
│   │   ├── example.json
│   ├── support
│   │   ├── commands.ts
│   │   ├── e2e.ts
├── src
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Product.tsx
│   ├── layouts
│   │   ├── DefaultLayout.tsx
│   ├── pages
│   │   ├── Invoice.tsx
│   │   ├── Order.tsx
│   │   ├── Request.tsx
│   ├── App.tsx
│   ├── global.css
│   ├── main.tsx
│   ├── Router.tsx
│   ├── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── cypress.config.ts 
├── package-lock.json 
├── package.json 
├── postcss.config.js 
├── README.md 
├── tailwind.config.js 
├── tsconfig.json 
├── tsconfig.node.json 
├── vite.config.json 
└── .gitignore
```

## Instalando as dependências

> Faça o **download** da [v16.14.2](https://nodejs.org/en/blog/release/v16.14.2) do **Node.js**

1. Após clonar o repositório, `cd compras`.
2. Execute `npm install` no seu terminal preferido para instalar todas as dependências do projeto.
3. Execute `npm run dev` para inicializar o projeto localmente.
4. Execute `npm run cypress:open` para executar a suíte de testes.

*Espero que goste!*