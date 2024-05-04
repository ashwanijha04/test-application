# Step 1: Use an official Node.js runtime as a parent image
FROM node:14

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# Optional: If you are using yarn, copy yarn.lock file instead
# COPY package.json yarn.lock ./

# Step 4: Install dependencies
RUN npm install
# Optional: If you are using yarn, use `yarn install` instead
# RUN yarn install

# Step 5: Copy the rest of your app's source code
COPY . .

# Step 6: Build the app
RUN npm run build
# Optional: If you are using yarn, use `yarn build` instead
# RUN yarn build

# Step 7: Use serve to serve the app on port 3000
# Install serve if it's not part of your dependencies
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

# Step 8: Inform Docker about the port we will run on
EXPOSE 3000

