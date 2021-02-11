-- TABLES --
-- user
create table users (
  id SERIAL,
  created TIMESTAMP,
  deleted TIMESTAMP,
  PRIMARY KEY (id)
);
-- login provider
create table login_providers (
  id SERIAL,
  value character varying(25) NOT NULL,
  created TIMESTAMP,
  deleted TIMESTAMP,
  PRIMARY KEY (id)
);
-- login
create table logins (
  id SERIAL,
  value character varying(25) NOT NULL,
  creator_user INTEGER NOT NULL REFERENCES users(id),
  login_provider INTEGER NOT NULL REFERENCES login_providers(id),
  created TIMESTAMP,
  deleted TIMESTAMP,
  PRIMARY KEY (id)
);
-- question
create table questions (
  id SERIAL,
  value character varying(25) NOT NULL,
  creator_user INTEGER NOT NULL REFERENCES users(id),
  created TIMESTAMP,
  deleted TIMESTAMP,
  PRIMARY KEY (id)
);
-- answer
create table answers (
  id SERIAL,
  value character varying(25) NOT NULL,
  question INTEGER NOT NULL REFERENCES questions(id),
  creator_user INTEGER NOT NULL REFERENCES users(id),
  created TIMESTAMP,
  deleted TIMESTAMP,
  PRIMARY KEY (id)
);
-- review
create table reviews (
  id SERIAL,
  value character varying(25) NOT NULL,
  question INTEGER NOT NULL REFERENCES questions(id),
  creator_user INTEGER NOT NULL REFERENCES users(id),
  created TIMESTAMP,
  deleted TIMESTAMP,
  PRIMARY KEY (id)
);