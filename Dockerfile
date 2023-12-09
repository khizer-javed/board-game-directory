# Use an official Node.js image as the base image
FROM node:14

# Install sequelize-cli globally
RUN npm install -g sequelize-cli

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose a port (if your application runs on a specific port)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
