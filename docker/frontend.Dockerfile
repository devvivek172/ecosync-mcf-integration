# Use Node.js LTS as the base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY client/package.json client/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY client/ .

# Build the React app
RUN npm run build

# Use nginx to serve the React app
FROM nginx:stable-alpine

# Copy the built app to nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
