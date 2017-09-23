FROM node:8.5.0-alpine

COPY package.json package.json

RUN npm install --production

COPY dist/ .

CMD ["npm", "start"]
