# Build stage
FROM node:16.18-alpine as build-stage

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json*  ./

#Install  Plugins
RUN npm install

# Bundle app source code to Docker Image
COPY . .


# Build app
RUN npm run build

# Production stage
FROM nginx:1.21.3-alpine as production-stage

# Copy build from build-stage to nginx
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 3000

EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]