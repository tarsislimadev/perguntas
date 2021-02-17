FROM node:15.8.0

EXPOSE 80

ENV DBNAME=postgres

ENV DBUSER=postgres

ENV DBPASS=app

ENV DBHOST=database

ENV DBPORT=5432

ENV DBTYPE=postgres

ENV DBLOG=true

ENV PORT=80

WORKDIR /app

COPY . .

RUN npm ci

RUN node config.db.js

CMD [ "npm", "run", "docker" ]
