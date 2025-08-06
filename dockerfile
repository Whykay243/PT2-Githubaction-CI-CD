# Use NGINX as the base image
FROM nginx:alpine

# Remove default NGINX site
RUN rm -rf /usr/share/nginx/html/*

# Copy static website content
COPY ./html /usr/share/nginx/html
COPY ./styles /usr/share/nginx/html/styles
COPY ./images /usr/share/nginx/html/images
COPY ./pdf /usr/share/nginx/html/pdf
COPY ./favicon.ico /usr/share/nginx/html/favicon.ico

# Expose port 80
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
