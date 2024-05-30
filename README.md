# Documentação da API

Este documento descreve os endpoints disponíveis na API e fornece instruções sobre como instalá-la.

## Endpoints Disponíveis

### Usuário

- **POST /user/register:** Registra um novo usuário.
- **POST /login:** Realiza login de um usuário.
- **GET /user/profile/:username:** Obtém o perfil de um usuário específico.
- **GET /friend-requests:** Obtém todas as solicitações de amizade.
- **POST /friend-requests/accept:** Aceita uma solicitação de amizade.


## Como Instalar

Para instalar e executar esta API localmente, siga estas etapas:

1. Clone o repositório:

```bash
git clone https://github.com/whalterduarte/NestJSApi-redeSocialMidia

Inicie o servidor:
```bash
npm start


Padrão de Commit com Emoji:

Para manter um histórico de commits organizado e compreensível, seguimos o seguinte padrão de commits com emojis:

- :sparkles: :sparkles: para uma nova funcionalidade
- :bug: :bug: quando corrigir um bug
- :memo: :memo: ao escrever documentação
- :rocket: :rocket: para melhorias de desempenho
- :white_check_mark: :white_check_mark: ao adicionar testes
- :recycle: :recycle: ao refatorar código
