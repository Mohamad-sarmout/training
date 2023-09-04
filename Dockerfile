FROM node:latest

WORKDIR /App

COPY . ./

RUN npm install

EXPOSE 3000

CMD ["node", "mhd.js"]