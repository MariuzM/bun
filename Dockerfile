# https://hub.docker.com/r/oven/bun/tags?page=1&name=alpine
FROM oven/bun:1.0.12-alpine

RUN apk add vips-dev

WORKDIR /usr/src/app
COPY . .
RUN bun install
RUN bun run build

EXPOSE 3000
CMD bun run start
