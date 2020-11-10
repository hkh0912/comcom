FROM node:carbon
EXPOSE 8081
COPY index.js .
RUN npm install express
CMD node index.js > log.out
