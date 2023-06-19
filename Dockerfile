# Dockerfile

FROM node:18.16.0-alpine3.17

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN yarn install

# Bundle app resourec
COPY . .
EXPOSE 8080
CMD [ "yarn", "start" ]
