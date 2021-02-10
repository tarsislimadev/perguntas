-- user
create table user(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  created TIMESTAMP,
  deleted TIMESTAMP
);
-- login provider
create table login_provider(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  value TINYTEXT,
  created TIMESTAMP,
  deleted TIMESTAMP
);
-- login
create table login (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user int not null references user(id),
  login_provider int not null references login_provider(id),
  created TIMESTAMP,
  deleted TIMESTAMP
);
-- question
create table question (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  value TINYTEXT NOT NULL,
  user int not null references user(id),
  created TIMESTAMP,
  deleted TIMESTAMP
);
-- answer
create table answer(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text TINYTEXT NOT NULL,
  review TINYINT,
  question int not null references question(id),
  user int not null references user(id),
  created TIMESTAMP,
  deleted TIMESTAMP
);