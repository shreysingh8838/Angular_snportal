# Stage 1: Build the Angular app
FROM node:latest AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Create a lightweight container to serve the app
FROM nginx:alpine AS production-stage
# FROM ubuntu:18.04
# COPY backend.milegisarkarinaukri.online.conf /etc/nginx/conf.d/default.conf
COPY milegisarkarinaukri.online.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist/sarkariresult /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]