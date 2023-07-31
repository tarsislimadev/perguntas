create table users(
  id serial primary key,
  created timestamp default now(),
  deleted timestamp null
);
create table questions(
  id serial primary key,
  question varchar(100) not null,
  user_owner integer not null,
  created timestamp default now(),
  deleted timestamp null,
  FOREIGN KEY (user_owner) REFERENCES users (id)
);
create table answers(
  id serial primary key,
  answer varchar(300) not null,
  question integer not null,
  user_owner integer not null,
  created timestamp default now(),
  deleted timestamp null,
  FOREIGN KEY (question) REFERENCES questions (id),
  FOREIGN KEY (user_owner) REFERENCES users (id)
);