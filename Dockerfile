# Single-stage Dockerfile for SHLanding React Application
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install a simple HTTP server to serve static files
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Serve the built application from dist directory
CMD ["serve", "-s", "dist", "-l", "3000"]
