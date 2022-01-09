FROM node:16.1.0-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]