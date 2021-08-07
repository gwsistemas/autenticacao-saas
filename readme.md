## GW Client

Esse projeto é feito com base em uma arquitetura bem definida e desacoplada chamada de
Clean Architecture como é um projeto front-end foi definido como lib/framework o [React](https://pt-br.reactjs.org/docs/getting-started.html), porem o projeto não é baseado no React ou em qualquer outra lib/framework de componentes e sim focado nos casos de uso da aplicação.

A grande vantagem desta arquitetura é focar nas regras de negócios e não em libs ou frameworks, caso no futuro o projeto precise ser refatorado para outra lib/framework não teremos problemas pois só será necessário refatorar apenas uma camada da arquitetura onde a lib/framework está definido, com isso, não ficamos refens de tecnologia excerto o javascript que a liguagem base da aplicação.

## Arquitetura do projeto divido por camada que aqui chamaremos de layer.
Confira aqui a documentação completa da nossa arquitetura de software [aqui](./docs/architecture-project.md)

## Estrutura dos nossos diretórios
Confira aqui a documentação completa da estrutra de diretórios [aqui](./docs/directories-structure.md)
