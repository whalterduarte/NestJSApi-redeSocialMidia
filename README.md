API Endpoints
Este é um guia dos endpoints disponíveis nesta API.

Padrão de Commit com Emoji
Usar emojis nos commits pode tornar mais fácil identificar o propósito ou intenção de cada commit. Aqui estão alguns exemplos de como você pode fazer isso:
✨ :sparkles: para uma nova funcionalidade
🐛 :bug: quando corrigir um bug
📝 :memo: ao escrever documentação
🚀 :rocket: para melhorias de desempenho
✅ :white_check_mark: ao adicionar testes
♻️ :recycle: ao refatorar código

## UserController:

POST /user: Criar um novo usuário.
GET /user: Obter todos os usuários.
GET /user/:id: Obter um usuário específico.
PATCH /user/:id: Atualizar um usuário específico.
DELETE /user/:id: Excluir um usuário específico.

## PhotoController:

POST /photo: Criar uma nova foto.
GET /photo: Obter todas as fotos.
GET /photo/:id: Obter uma foto específica.
PATCH /photo/:id: Atualizar uma foto específica.
DELETE /photo/:id: Excluir uma foto específica.

## FriendRequestController:

POST /friend-request: Enviar uma nova solicitação de amizade.
GET /friend-request: Obter todas as solicitações de amizade.
GET /friend-request/:id: Obter uma solicitação de amizade específica.
PATCH /friend-request/:id: Aceitar ou recusar uma solicitação de amizade.
DELETE /friend-request/:id: Cancelar uma solicitação de amizade.

## FriendController:

POST /friend: Adicionar um novo amigo.
GET /friend: Obter todos os amigos.
GET /friend/:id: Obter um amigo específico.
PATCH /friend/:id: Atualizar informações de um amigo.
DELETE /friend/:id: Remover um amigo.

## PostController:

POST /post: Criar uma nova postagem.
GET /post: Obter todas as postagens.
GET /post/:id: Obter uma postagem específica.
PATCH /post/:id: Atualizar uma postagem específica.
DELETE /post/:id: Excluir uma postagem específica.

## CommentController:

POST /comment: Adicionar um novo comentário.
GET /comment: Obter todos os comentários.
GET /comment/:id: Obter um comentário específico.
PATCH /comment/:id: Atualizar um comentário específico.
DELETE /comment/:id: Excluir um comentário específico.

## PostLikeController:

POST /post-like: Adicionar uma curtida em uma postagem.
GET /post-like: Obter todas as curtidas em postagens.
GET /post-like/:id: Obter uma curtida específica em uma postagem.
PATCH /post-like/:id: Atualizar uma curtida específica em uma postagem.
DELETE /post-like/:id: Remover uma curtida específica em uma postagem.

## NotificationController:

POST /notification: Criar uma nova notificação.
GET /notification: Obter todas as notificações.
GET /notification/:id: Obter uma notificação específica.
PATCH /notification/:id: Atualizar uma notificação específica.
DELETE /notification/:id: Excluir uma notificação específica.

## PhotoCommentController:

POST /photo-comment: Adiciona um novo comentário em uma foto.
GET /photo-comment: Retorna todos os comentários em fotos.
GET /photo-comment/:id: Retorna um comentário específico em uma foto.
PATCH /photo-comment/:id: Atualiza um comentário específico em uma foto.
DELETE /photo-comment/:id: Exclui um comentário específico em uma foto.

## PhotoLikeController:

POST /photo-like: Adiciona uma curtida em uma foto.
GET /photo-like: Retorna todas as curtidas em fotos.
GET /photo-like/:id: Retorna uma curtida específica em uma foto.
PATCH /photo-like/:id: Atualiza uma curtida específica em uma foto.
DELETE /photo-like/:id: Remove uma curtida específica em uma foto.