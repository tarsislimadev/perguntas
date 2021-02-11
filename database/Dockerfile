FROM postgres:13.1

ENV POSTGRES_PASSWORD=app

COPY ./*.sql /docker-entrypoint-initdb.d
