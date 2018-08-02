FROM node:10.8.0-alpine

WORKDIR /app
COPY . .
RUN ["npm", "install"]

EXPOSE 8000
ENTRYPOINT [ "npm" ]
CMD ["start"]
