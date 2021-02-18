FROM node:15.8.0

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

CMD npm run docker
