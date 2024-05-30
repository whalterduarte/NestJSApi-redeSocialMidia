# Documentação da API

## Endpoints Disponíveis

### Usuário

- **POST /user/register**
  - *Descrição:* Registra um novo usuário.
  - *Método HTTP:* POST

- **GET /user**
  - *Descrição:* Retorna todos os usuários.
  - *Método HTTP:* GET

- **GET /user/:id**
  - *Descrição:* Recupera informações de um usuário específico.
  - *Método HTTP:* GET
  - *Parâmetros:*
    - `:id`: O ID do usuário a ser recuperado.

- **PATCH /user/profile/:username**
  - *Descrição:* Atualiza o perfil de um usuário específico.
  - *Método HTTP:* PATCH
  - *Parâmetros:*
    - `:username`: O nome de usuário do usuário cujo perfil será atualizado.

- **DELETE /user/:id**
  - *Descrição:* Remove um usuário específico.
  - *Método HTTP:* DELETE
  - *Parâmetros:*
    - `:id`: O ID do usuário a ser removido.

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

Certifique-se de ajustar a documentação conforme necessário para refletir a funcionalidade específica de cada rota.


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
