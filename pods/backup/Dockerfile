
FROM node:20

WORKDIR /usr/src/app

RUN npm install --ignore-scripts=false --verbose bufferutil utf-8-validate @mongodb-js/zstd snappy --unsafe-perm
COPY bundle/bundle.js ./

EXPOSE 3000
CMD [ "node", "bundle.js" ]
