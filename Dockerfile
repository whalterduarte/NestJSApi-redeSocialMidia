# Use the official Node.js base image
FROM node:20.11.1

# Instalar OpenSSL
RUN apt-get update -y && apt-get install -y openssl

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=prod

# Copy the rest of the application code
COPY . .

# Run Prisma to push the database schema
RUN npx prisma db push

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 7000

# Command to run the application
CMD ["node", "dist/main"]
