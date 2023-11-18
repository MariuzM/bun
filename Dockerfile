# https://hub.docker.com/r/oven/bun/tags?page=1&name=alpine
FROM oven/bun:1.0.12-alpine

WORKDIR /usr/src/app
COPY . .
RUN bun install
RUN bun run build

ENV PORT 3001

EXPOSE 3000

CMD bun run start
