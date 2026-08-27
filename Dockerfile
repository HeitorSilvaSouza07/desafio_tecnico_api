FROM node:24.14.1

WORKDIR /src

COPY package.json /src/

RUN npm install

COPY . .

CMD ["npm", "start"]