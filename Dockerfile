FROM node:16
WORKDIR /api-beef-jerky
COPY package.json .
RUN npm install
COPY . .
CMD npm run start