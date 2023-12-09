FROM node:14
WORKDIR /code
COPY package*.json ./
RUN npm install -g sequelize-cli nodemon
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
