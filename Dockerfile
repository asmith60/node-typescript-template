FROM node:8.5.0-alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY dist/bundle.js dist/bundle.js

ENTRYPOINT ["npm"]

CMD ["start"]
