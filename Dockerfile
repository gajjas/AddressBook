# build stage
FROM node:16.6-alpine3.14 as build-stage
RUN apk add g++ make py3-pip
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]