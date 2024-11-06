# Task Manager API

Task Manager API é uma aplicação simples de gerenciamento de tarefas construída com NestJS, Node.js, e TypeScript. Este projeto implementa funcionalidades CRUD para gerenciar tarefas e utiliza o UUID para identificação única.

## Funcionalidades

- **Criação de Tarefas:** Adicione uma nova tarefa com um título e descrição.
- **Leitura de Tarefas:** Obtenha a lista de todas as tarefas ou apenas de uma tarefa específica.
- **Atualização de Tarefas:** Modifique o status de uma tarefa (por exemplo, "Pendente" ou "Concluído").
- **Exclusão de Tarefas:** Remova uma tarefa da lista.

## Tecnologias Utilizadas

- **NestJS** - Framework para construção de aplicações Node.js escaláveis.
- **Node.js** - Ambiente de execução de JavaScript.
- **TypeScript** - Superconjunto de JavaScript que adiciona tipagem estática.


## Estrutura do Projeto

- `src/app.module.ts`: Módulo principal que importa o módulo de tarefas.
- `src/tasks/tasks.module.ts`: Módulo que define os componentes do domínio de tarefas.
- `src/tasks/tasks.controller.ts`: Controlador que define os endpoints da API para gerenciamento de tarefas.
- `src/tasks/tasks.service.ts`: Serviço que contém a lógica de negócios das tarefas.
- `src/tasks/task.model.ts`: Define a estrutura e o modelo de dados de uma tarefa.

## Endpoints

- `GET /tasks` - Retorna todas as tarefas.
- `POST /tasks` - Cria uma nova tarefa.
- `PATCH /tasks/:id/status` - Atualiza o status de uma tarefa.
- `DELETE /tasks/:id` - Deleta uma tarefa.

