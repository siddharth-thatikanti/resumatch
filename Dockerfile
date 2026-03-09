# Use official Nginx image as base
FROM nginx:alpine

# Copy HTML files to Nginx's default serving directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Nginx starts automatically — no CMD needed
