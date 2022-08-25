FROM node:18-alpine

WORKDIR /app
COPY ./dist/apps/bo .
COPY package*.json .
RUN rm -rf .git/hooks

ENV PORT=3333
ENV HUSKY=0
EXPOSE ${PORT}

# RUN npm set-script prepare "" && npm install --production --omit=dev
RUN npm set-script prepare "" && npm install reflect-metadata tslib rxjs @nestjs/platform-express

CMD node ./main.js
