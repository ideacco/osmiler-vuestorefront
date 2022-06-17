FROM node:14.17.6

RUN mkdir -p /var/project/vuestore

COPY . /var/project/vuestore

RUN cd /var/project/vuestore \
  && yarn \
  && yarn install \
  && yarn build

WORKDIR /var/project/vuestore
EXPOSE 8888

CMD cd /var/project/vuestore && yarn start
