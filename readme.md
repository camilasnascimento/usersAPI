# 📋 Gerenciamento de Usuarios e Tarefas API

Esta é uma API RESTful para gerenciamento de usuários e tarefas, construída com Node.js, Express, Sequelize, dotenv e MySQL.

## 📦 Estrutura do Projeto

```
user-task-api
├── config
│   └── config.js
├── controllers
│   ├── taskController.js
│   └── userController.js
├── migrations
│   ├── <timestamp>-create-user.js
│   └── <timestamp>-create-task.js
├── models
│   ├── index.js
│   ├── task.js
│   └── user.js
├── routes
│   ├── tasks.js
│   └── users.js
├── .env
├── index.js
├── package.json
└── README.md
```

## 🚀 Começando

### 1. Pré-requisitos

- Node.js
- MySQL

### 2. Instalação

1. Instale as dependências:
    ```sh
    npm install
    ```

2. Configure as variáveis de ambiente:
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```plaintext
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=user_task_db
    DB_DIALECT=mysql
    ```

3. Inicialize o banco de dados:
    ```sh
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    ```

4. Inicie o servidor:
    ```sh
    npx nodemon index.js
    ```

## 🔧 Uso

### Endpoints para `User`

#### 📥 Criar Usuário
- **URL**: `/users`
- **Método**: `POST`
- **Body**:
    ```json
    {
      "name": "Usuario Teste",
      "email": "teste@examplo.com"
    }
    ```

#### 📤 Listar Usuários
- **URL**: `/users`
- **Método**: `GET`

#### ✏️ Atualizar Usuário
- **URL**: `/users/:id`
- **Método**: `PUT`
- **Body**:
    ```json
    {
      "name": "Usuario Teste (Atualizado)",
      "email": "teste@examplo.com"
    }
    ```

#### 🗑️ Deletar Usuário
- **URL**: `/users/:id`
- **Método**: `DELETE`

### Endpoints para `Task`

#### 📥 Criar Tarefa
- **URL**: `/tasks`
- **Método**: `POST`
- **Body**:
    ```json
    {
      "title": "Comprinhas",
      "description": "Leite, carne e frutas.",
      "userId": 1
    }
    ```

#### 📤 Listar Tarefas
- **URL**: `/tasks`
- **Método**: `GET`

#### ✏️ Atualizar Tarefa
- **URL**: `/tasks/:id`
- **Método**: `PUT`
- **Body**:
    ```json
    {
      "title": "Comprinhas (Atualizada)",
      "description": "Leite, açucar, sal, carne e frutas.",
      "userId": 1
    }
    ```

#### 🗑️ Deletar Tarefa
- **URL**: `/tasks/:id`
- **Método**: `DELETE`

## 🧪 Testando com Postman

1. Abra o Postman.
2. Configure as requisições conforme descrito nos endpoints acima.
3. Envie as requisições e verifique as respostas.

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- dotenv

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Criado com ❤️ por [Camila Nascimento](https://github.com/camilasnascimento) 😊
