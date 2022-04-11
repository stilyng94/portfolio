FROM node:14-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build


FROM nginx:1.16.0-alpine

# RUN addgroup -g 1001 -S node
# RUN adduser -S node -u 1001

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

# USER node
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
