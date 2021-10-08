FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
EXPOSE 8080
RUN npm install
COPY . .
RUN npm run build