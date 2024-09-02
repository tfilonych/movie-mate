FROM node:19-alpine
WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

# Run Prisma generate to initialize Prisma Client
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]