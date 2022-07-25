FROM mysql:debian

USER root

RUN apt update -y && \
    apt install -y iproute2 vim

EXPOSE 3306


ENV MYSQL_USER shachar
ENV MYSQL_ROOT_PASSWORD 123456

COPY . /var/local-mysql/
