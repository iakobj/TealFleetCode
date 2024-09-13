# Stage 1: Serve the caddy application using a lightweight server
FROM caddy:2

# Copy the nginx configuration file to the container
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80 to allow incoming HTTP traffic
EXPOSE 80
EXPOSE 443

