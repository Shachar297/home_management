FROM mysql:debian

USER root

RUN apt update -y && \
    apt install -y iproute2 vim

EXPOSE 3306

COPY . /var/local-mysql/
