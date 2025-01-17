
# Use the official image as a base image
FROM node:20.11.1-alpine


# Set the working directory
WORKDIR /main


# Copy the package.json and package-lock.json
COPY package*.json ./


# Install the dependencies
RUN npm install


# Copy the prisma directory
COPY prisma ./prisma


# Generate prisma client
RUN npx prisma generate


# Copy the source code
COPY . .


# Expose the port
EXPOSE 4200


# Build the application
RUN npm run build


# Start the application
CMD [ "npm", "run", "dev" ]
