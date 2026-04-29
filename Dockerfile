FROM node:18

# Set working directory
WORKDIR /app/backend

# Copy backend package.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy backend code
COPY backend .

# Expose port
EXPOSE 5000

# Start app
CMD ["npm", "start"]
