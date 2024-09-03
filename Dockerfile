FROM node:16-alpine  
WORKDIR /ADMINPANEL
ENV NODE_OPTIONS="--max-old-space-size=16384"
COPY . .
RUN npm install --force
RUN npm run build
RUN npm install -g serve
expose 3000

cmd ["serve","-s","build","-l","3000"]
