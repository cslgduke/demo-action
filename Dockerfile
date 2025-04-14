# Use an official Node.js runtime as a parent image
FROM node

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package - lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your Node.js application listens on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "server.js"]