FROM node:20-alpine

COPY package.json /app/
COPY backend /app/backend
COPY client /app/client
COPY .env /app/

WORKDIR /app

RUN npm run build

CMD ["npm", "run", "start"]