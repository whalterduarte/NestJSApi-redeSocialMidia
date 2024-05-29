## DIAGRAMA DO BANCO DE DADOS ##

Table User {
  id String [primary key]
  name String
  email String
  password String
  phone String
  file String
  bio String
}

Table Photo {
  id Int [primary key]
  url String
  userId String
}

Table PhotoComment {
  id Int [primary key]
  content String
  createdAt DateTime [default: `now()`]
  photoId Int
  authorId String
}

Table PhotoLike {
  id Int [primary key]
  photoId Int
  userId String
}

Table FriendRequest {
  id Int [primary key]
  requesterId String
  requesteeId String
  status String [default: "pending"]
}

Table Friend {
  id Int [primary key]
  userId String
  friendId String
}

Table Post {
  id Int [primary key]
  content String
  file String
  visibility String [default: "public"]
  createdAt DateTime [default: `now()`]
  authorId String
}

Table Comment {
  id Int [primary key]
  content String
  createdAt DateTime [default: `now()`]
  postId Int
  authorId String
}

Table PostLike {
  id Int [primary key]
  postId Int
  userId String
}

Table Notification {
  id Int [primary key]
  content String
  createdAt DateTime [default: `now()`]
  userId String
}

Ref: User.id < Friend.userId
Ref: User.id < Friend.friendId
Ref: User.id < Photo.userId
Ref: User.id < PhotoComment.authorId
Ref: User.id < PhotoLike.userId
Ref: User.id < FriendRequest.requesterId
Ref: User.id < FriendRequest.requesteeId
Ref: User.id < Post.authorId
Ref: User.id < Comment.authorId
Ref: User.id < PostLike.userId
Ref: User.id < Notification.userId
Ref: Photo.id < PhotoComment.photoId
Ref: Photo.id < PhotoLike.photoId
Ref: Post.id < Comment.postId
Ref: Post.id < PostLike.postId
Ref: Post.id < Notification.content
