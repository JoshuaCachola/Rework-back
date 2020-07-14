FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

# Adding environment variables
ENV JWT_SECRET=9702a9c1750f205aec90bb67247eafee92702ce50e1c033280223feb8a6475df
ENV JWT_EXPIRES_IN=604800
ENV API_KEY=AIzaSyC0YJylly9ZmkoIGcZLPO5xVNZMyuyo78c
ENV NODE_ENV=production
# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "start" ]