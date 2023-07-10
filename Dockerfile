# Stage 1: Build the Angular app
FROM node:latest AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Create a lightweight container to serve the app
FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/dist/sarkariresult /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]