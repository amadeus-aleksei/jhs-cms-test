# Use Node.js LTS image
FROM node:18

# Install necessary build tools and libraries
RUN apt-get update && apt-get install -y \
    bash \
    build-essential \
    libc6-dev \
    python3 \
    python3-pip \
    g++ \
    make \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN yarn install --force --frozen-lockfile --ignore-optional

# Rebuild native bindings for the current architecture
RUN yarn add --force @swc/core

# Copy the rest of the application files
COPY . .
COPY certificates /app/certificates

# Attach Volume for Strapi uploads, later change to a cloud storage
VOLUME ["/app/public/uploads"]

# Set Node.js memory limit to prevent "heap out of memory" errors
ENV NODE_OPTIONS="--max-old-space-size=2048"

# Build the Strapi admin UI
RUN yarn build --debug

# Expose the port
EXPOSE 1337

# Start the server
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then yarn develop; else yarn start; fi"]