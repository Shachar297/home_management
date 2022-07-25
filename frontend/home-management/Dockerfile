FROM alpine:latest

RUN apk add --no-cache nodejs npm \
    && npm install -g @angular/cli npm-snapshot \
    && npm cache clean --force

WORKDIR /frontend

COPY . /frontend

RUN npm install

EXPOSE 4200

ENTRYPOINT [ "npm" ]

CMD ["start"]