FROM node:15.8.0

ENV DBCONNECTION=postgres://postgres:app@database/postgres

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

CMD npm run docker
