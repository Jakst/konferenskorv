FROM node:alpine
# MAINTAINER Skyll på chefen

# Välj godtycklig mapp att exekvera skiten ifrån
WORKDIR /usr/src/app

# Kopiera den där filen med alla dependencies i
COPY package.json .

# UND DANN, INSTALLIEREN BITTE
RUN npm install

# Kopiera in mappen med koden
COPY src src

# RUN APP RUN
CMD [ "npm", "start" ]