FROM node:16.13.1-alpine
ADD ./figlet /app
RUN apk update && apk add bash figlet \
    && cd /app \
    && yarn install
CMD ["node","/app/index.js"]
EXPOSE 3000