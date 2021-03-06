## GW Client

Esse projeto é feito com base em uma arquitetura bem definida e desacoplada chamada de
Clean Architecture como é um projeto front-end foi definido como lib/framework o [React](https://pt-br.reactjs.org/docs/getting-started.html), porem o projeto não é baseado no React ou em qualquer outra lib/framework de componentes e sim focado nos casos de uso da aplicação.

A grande vantagem desta arquitetura é focar nas regras de negócios e não em libs ou frameworks, caso no futuro o projeto precise ser refatorado para outra lib/framework não teremos problemas pois só será necessário refatorar apenas uma camada da arquitetura onde a lib/framework está definido, com isso, não ficamos refens de tecnologia excerto o javascript que a liguagem base da aplicação.

## Instalação dos módulos

instalação dos módulos, use de preferência o yarn para não ter 2 arquivos **_.lock_**

comando: `yarn`

## Como roda o projeto em desenvolvimento

comando: `yarn dev`

O projeto iniciará na `http://localhost:8080`

## Como roda o projeto em produção

comando 1: `yarn run build`
comando 2: `yarn start`

O projeto iniciará na `http://localhost:3000`

## Pontos de configuração

Caso seja necessário alteração relacionado portas, arquivos, módulos ou builds de dev ou prod use:

`webpack.common.js`, `webpack.dev.js`, `webpack.prod.js` ou `package.json`

As variáveis de ambientes use

`webpack.dev.js`, `webpack.prod.js`

## Arquitetura do projeto divido por camada que aqui chamaremos de layer.

Confira aqui a documentação completa da nossa arquitetura de software [aqui](./docs/architecture-project.md)

## Estrutura dos nossos diretórios

Confira aqui a documentação completa da estrutra de diretórios [aqui](./docs/directories-structure.md)
