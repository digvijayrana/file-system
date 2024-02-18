
FROM node:latest
WORKDIR /app/fileManagement
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

CMD ["node", "src/app.js"]