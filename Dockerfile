FROM node:19-alpine
WORKDIR .
RUN apk add --no-cache git
RUN git clone https://github.com/LoganS1/SWEAssignment5
WORKDIR ./SWEAssignment5
RUN npm i
CMD ["node", "app.js"]