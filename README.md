# Documentação da API

## Endpoints Disponíveis

### Usuário
- **POST /user/all**
  - *Descrição:* Lista todos usuários.
  - *Método HTTP:* GET 

- **POST /user/:username**
  - *Descrição:* Busca usuário com base no username.
  - *Método HTTP:* GET 

- **POST /user/register**
  - *Descrição:* Registra um novo usuário.
  - *Método HTTP:* POST

- **POST /login**
  - *Descrição:* Login do usuario.
  - *Método HTTP:* POST

- **PATCH /user/profile/:username**
  - *Descrição:* Atualiza o perfil de um usuário específico.
  - *Método HTTP:* PATCH
  - *Parâmetros:*
    - `:username`: O nome de usuário do usuário cujo perfil será atualizado.

### Solicitações de Amizade

- **POST /friend-requests**
  - *Descrição:* Envia uma solicitação de amizade.
  - *Método HTTP:* POST

- **GET /friend-requests/received**
  - *Descrição:* Retorna todas as solicitações de amizade recebidas pelo usuário.
  - *Método HTTP:* GET

- **PATCH /friend-requests/:id/accept**
  - *Descrição:* Aceita uma solicitação de amizade.
  - *Método HTTP:* PATCH
  - *Parâmetros:*
    - `:id`: O ID da solicitação de amizade a ser aceita.

### Amigos

- **GET /friends**
  - *Descrição:* Retorna todos os amigos do usuário.
  - *Método HTTP:* GET


## Como Instalar

Para instalar e executar esta API localmente, siga estas etapas:

1. Clone o repositório:

```bash
git clone https://github.com/whalterduarte/NestJSApi-redeSocialMidia
```
02. instale as dependencias:
```bash
npm install
```
03. Inicie o servidor:
```bash
npm start
```

## Padrão de Commit com Emoji:
Para manter um histórico de commits organizado e compreensível, seguimos o seguinte padrão de commits com emojis:

- :sparkles: :sparkles: para uma nova funcionalidade
- :bug: :bug: quando corrigir um bug
- :memo: :memo: ao escrever documentação
- :rocket: :rocket: para melhorias de desempenho
- :white_check_mark: :white_check_mark: ao adicionar testes
- :recycle: :recycle: ao refatorar código
