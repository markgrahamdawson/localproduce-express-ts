# Use the official Node.js 10 image.
# https://hub.docker.com/_/node
FROM node:16 as build

# # Access the npm token arg as an env var
# ARG NPM_TOKEN

# Create and change to the app directory inside the container.
WORKDIR /usr/src/app

# # Copy package files and install deps
# COPY .npmrc .npmrc  
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

# install deps
RUN npm i

# # remove the .npmrc file
# RUN rm -f .npmrc

# Actual build
FROM node:16

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app

# Copy and build
COPY . ./
RUN npm run build

# Run the app on container startup.
CMD npm run start