# Documentação da API

Este documento descreve os endpoints disponíveis na API e fornece instruções sobre como instalá-la.

# API Documentation

## Endpoints Available

### User

- **POST /user/register**
  - *Description:* Registers a new user.
  - *HTTP Method:* POST

- **POST /login**
  - *Description:* Logs in a user.
  - *HTTP Method:* POST

- **GET /user/profile/:username**
  - *Description:* Retrieves the profile of a specific user.
  - *HTTP Method:* GET
  - *Parameters:*
    - `:username`: The username of the user whose profile is to be retrieved.

- **GET /friend-requests**
  - *Description:* Retrieves all friend requests.
  - *HTTP Method:* GET

- **POST /friend-requests/accept**
  - *Description:* Accepts a friend request.
  - *HTTP Method:* POST

- **GET /friend-requests/received**
  - *Description:* Lists received friend requests based on the user's ID.
  - *HTTP Method:* GET


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
