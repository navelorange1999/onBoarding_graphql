FROM node:14.17.1

COPY . /app
WORKDIR /app

EXPOSE 3001

RUN npm install
RUN npm run build

CMD ["node", "dist/main.js"]