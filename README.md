# ✅ To-Do List API

API REST desenvolvida em **Node.js** com **Express** e **SQLite**, criada com o objetivo de praticar os fundamentos do desenvolvimento backend.

Este foi o primeiro projeto desenvolvido para compreender o funcionamento de uma API, desde o recebimento de uma requisição até a manipulação dos dados em um banco de dados relacional.

---

# 🚀 Tecnologias utilizadas

* Node.js
* Express
* SQLite

---

# 📚 Conceitos praticados

* Arquitetura em camadas (Routes → Controllers → Models)
* CRUD completo
* Banco de dados SQLite
* Rotas HTTP
* Validação de dados
* Organização do projeto
* Modularização do código
* Tratamento de erros
* Refatoração de código

---

# 📂 Estrutura do projeto

```text
src/
│
├── controllers/
│   └── taskController.js
│
├── database/
│   ├── database.js
│   └── createTable.js
│
├── models/
│   └── taskModel.js
│
├── routes/
│   └── taskRoutes.js
│
├── utils/
│   └── utils.js
│
├── validators/
│   └── taskValidators.js
│
└── server.js
```

---

# 🗄 Banco de dados

O projeto utiliza **SQLite** contendo uma única tabela:

## Tasks

* id
* title
* description
* completed
* creation_date
* completion_date

---

# 📡 Rotas da API

| Método | Rota         | Descrição                |
| ------ | ------------ | ------------------------ |
| GET    | `/tasks`     | Lista todas as tarefas   |
| GET    | `/tasks/:id` | Busca uma tarefa pelo ID |
| POST   | `/tasks`     | Cria uma nova tarefa     |
| PUT    | `/tasks/:id` | Atualiza uma tarefa      |
| DELETE | `/tasks/:id` | Remove uma tarefa        |

---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

ou

```bash
node src/server.js
```

---

# 🎯 Objetivo do projeto

Este projeto foi desenvolvido com foco em aprendizado dos principais conceitos do desenvolvimento backend utilizando Node.js.

Durante o desenvolvimento foram praticados conceitos como:

* Construção de APIs REST
* Operações CRUD
* Comunicação com banco de dados
* Organização em camadas (Routes, Controllers e Models)
* Validação de dados
* Modularização
* Refatoração do código

Este projeto serviu como base para os projetos posteriores, incluindo autenticação com JWT e relacionamento entre tabelas.

---

# 📄 Licença

Este projeto foi desenvolvido para fins de estudo e aprendizado.