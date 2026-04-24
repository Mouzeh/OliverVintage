FROM node:20-alpine AS base

# Install dependencies only when needed
WORKDIR /app

COPY package*.json ./

RUN npm ci

# Copy all files
COPY . .

# Build if production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

EXPOSE 3000

CMD ["npm", "run", "dev"]
