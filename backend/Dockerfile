FROM node:15.7.0

ENV DBNAME=app

ENV DBUSER=app

ENV DBPASS=app

ENV DBHOST=database

ENV DBPORT=5432

ENV DBTYPE=postgres

ENV DBLOG=true

ENV PORT=80

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 80

CMD [ "npm", "start" ]
