FROM node:24.14.1

WORKDIR /src

COPY package.json .

RUN npm install

COPY . . 

CMD ["npm", "run", "start"] 