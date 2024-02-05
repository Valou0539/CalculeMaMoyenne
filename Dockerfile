FROM node:20-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .
RUN npm install --platform=linuxmusl --arch=x64 sharp
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]