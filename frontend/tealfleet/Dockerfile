# Stage 1: Build the React application
FROM node:18.17.1-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci --silent

# Copy the entire application to the container
COPY . .

# Build the React application
ENV NODE_OPTIONS=--max_old_space_size=512
RUN npm run build

# Stage 2: Serve the built React application using a lightweight server
FROM nginx:1.24.0-alpine

# Copy the built React application from the previous stage to the nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to allow incoming HTTP traffic
EXPOSE 80

# Start the nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
