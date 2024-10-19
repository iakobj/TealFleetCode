# Stage 1: Build the ExpressJS application
FROM node:18.17.1-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire application to the container
COPY . .

# Expose port 80 to allow incoming HTTP traffic
ENV SERVER_PORT=3000
EXPOSE 3000

# Start the ExpressJS server when the container starts
# Starting with mode "ris" (Reset, Initialize, Seed) is used only for demo purposes
WORKDIR /app/src
#CMD ["node", "app.js", "ris"]

CMD ["sh", "-c", "node app.js ris > output.log 2>&1"]
