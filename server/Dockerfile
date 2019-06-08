FROM mhart/alpine-node:12.4.0
WORKDIR /api
COPY ./package.json /api
RUN npm i
COPY . /api

ENTRYPOINT ["sh", "./entrypoint.sh"]

EXPOSE 3000
