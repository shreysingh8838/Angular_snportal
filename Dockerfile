# Stage 1: Build the Angular app
FROM node:latest AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Create a lightweight container to serve the app
FROM nginx:alpine AS production-stage

# Install required packages and Certbot
FROM ubuntu:18.04

RUN apt-get update -y \
    && apt-get install -y curl vim software-properties-common \
    && add-apt-repository ppa:certbot/certbot -y \
    && apt-get update -y \
    && apt-get install -y python-certbot-nginx \
    && apt-get clean

COPY milegisarkarinaukri.online.conf /etc/nginx/nginx.conf

COPY --from=build-stage /app/dist/sarkariresult /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
