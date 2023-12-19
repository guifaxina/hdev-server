FROM node:18.12.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["node", "build/src/server.js"]