### Diagrama do Banco de Dados

O diagrama abaixo representa a estrutura de um banco de dados relacional para uma plataforma de rede social.

#### Tabelas e Funcionalidades:

- **User:** Armazena informações sobre os usuários registrados na plataforma.
    - `id`: Identificador único para cada usuário. Usado como chave primária para identificação.
    - `name`: Nome do usuário.
    - `email`: Endereço de e-mail do usuário.
    - `password`: Senha do usuário.
    - `phone`: Número de telefone do usuário (opcional).
    - `file`: Caminho do arquivo de imagem de perfil do usuário (opcional).
    - `bio`: Breve descrição ou biografia do usuário.

- **Photo:** Registra fotos compartilhadas pelos usuários.
    - `id`: Identificador único para cada foto. Usado como chave primária.
    - `url`: URL da foto.
    - `userId`: Identificador do usuário que compartilhou a foto. Usado como chave estrangeira referenciando o `id` na tabela `User`.

- **PhotoComment:** Mantém os comentários feitos nas fotos.
    - `id`: Identificador único para cada comentário. Chave primária.
    - `content`: Conteúdo do comentário.
    - `createdAt`: Data e hora em que o comentário foi feito (padrão: data e hora atuais).
    - `photoId`: Identificador da foto à qual o comentário está associado. Chave estrangeira referenciando o `id` na tabela `Photo`.
    - `authorId`: Identificador do usuário que fez o comentário. Chave estrangeira referenciando o `id` na tabela `User`.

- **PhotoLike:** Armazena as interações de "curtida" nas fotos.
    - `id`: Identificador único para cada interação de "curtida". Chave primária.
    - `photoId`: Identificador da foto que recebeu a "curtida". Chave estrangeira referenciando o `id` na tabela `Photo`.
    - `userId`: Identificador do usuário que deu a "curtida". Chave estrangeira referenciando o `id` na tabela `User`.

- **FriendRequest:** Registra solicitações de amizade entre usuários.
    - `id`: Identificador único para cada solicitação de amizade. Chave primária.
    - `requesterId`: Identificador do usuário que enviou a solicitação de amizade. Chave estrangeira referenciando o `id` na tabela `User`.
    - `requesteeId`: Identificador do usuário que recebeu a solicitação de amizade. Chave estrangeira referenciando o `id` na tabela `User`.
    - `status`: Estado da solicitação de amizade (padrão: "pending" para pendente).

- **Friend:** Mantém registros de amizades confirmadas.
    - `id`: Identificador único para cada registro de amizade confirmada. Chave primária.
    - `userId`: Identificador do usuário que é amigo de outro usuário. Chave estrangeira referenciando o `id` na tabela `User`.
    - `friendId`: Identificador do amigo. Chave estrangeira referenciando o `id` na tabela `User`.

- **Post:** Armazena postagens dos usuários.
    - `id`: Identificador único para cada postagem. Chave primária.
    - `content`: Conteúdo da postagem.
    - `file`: Caminho do arquivo de mídia associado à postagem (opcional).
    - `visibility`: Visibilidade da postagem (padrão: "public" para pública).
    - `createdAt`: Data e hora em que a postagem foi feita (padrão: data e hora atuais).
    - `authorId`: Identificador do usuário que fez a postagem. Chave estrangeira referenciando o `id` na tabela `User`.

- **Comment:** Registra os comentários feitos nas postagens.
    - `id`: Identificador único para cada comentário. Chave primária.
    - `content`: Conteúdo do comentário.
    - `createdAt`: Data e hora em que o comentário foi feito (padrão: data e hora atuais).
    - `postId`: Identificador da postagem à qual o comentário está associado. Chave estrangeira referenciando o `id` na tabela `Post`.
    - `authorId`: Identificador do usuário que fez o comentário. Chave estrangeira referenciando o `id` na tabela `User`.

- **PostLike:** Registra as interações de "curtida" nas postagens.
    - `id`: Identificador único para cada interação de "curtida". Chave primária.
    - `postId`: Identificador da postagem que recebeu a "curtida". Chave estrangeira referenciando o `id` na tabela `Post`.
    - `userId`: Identificador do usuário que deu a "curtida". Chave estrangeira referenciando o `id` na tabela `User`.

- **Notification:** Armazena notificações para os usuários.
    - `id`: Identificador único para cada notificação. Chave primária.
    - `content`: Conteúdo da notificação.
    - `createdAt`: Data e hora em que a notificação foi criada (padrão: data e hora atuais).
    - `userId`: Identificador do usuário para o qual a notificação é destinada. Chave estrangeira referenciando o `id` na tabela `User`.

#### Referências:

As referências estabelecem as relações entre as tabelas, indicando as chaves estrangeiras que vinculam os registros em uma tabela aos registros em outra tabela. Por exemplo, `User.id < Friend.userId` indica que o ID de um usuário pode ser encontrado no campo "userId" da tabela "Friend".
