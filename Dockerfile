
# Use the official image as a base image
FROM node:20.11.1-alpine


# Set the working directory
WORKDIR /app


# Copy the package.json and package-lock.json
COPY package*.json ./


# Clean Cache and  Install the dependencies
RUN npm cache clean --force
RUN npm install


# Copy the source code
COPY . .


# Build the application
RUN npm run build


# Generate prisma client
RUN npx prisma generate


# Expose the port
EXPOSE 4200


# Start the application
CMD [ "npm", "run", "start:migrate:prod" ]
