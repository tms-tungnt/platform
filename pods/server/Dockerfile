FROM node:20

WORKDIR /usr/src/app
RUN npm install --ignore-scripts=false --verbose bufferutil utf-8-validate @mongodb-js/zstd snappy --unsafe-perm
RUN npm install --ignore-scripts=false --verbose uNetworking/uWebSockets.js#v20.43.0

RUN apt-get update
RUN apt-get install libjemalloc2

ENV LD_PRELOAD=libjemalloc.so.2
ENV MALLOC_CONF=dirty_decay_ms:1000,narenas:2,background_thread:true

COPY bundle/bundle.js ./
COPY bundle/bundle.js.map ./
RUN mv node_modules/uWebSockets.js/*.node .

EXPOSE 8080
ENV UWS_HTTP_MAX_HEADERS_SIZE 32768
CMD node --enable-source-maps --inspect bundle.js
