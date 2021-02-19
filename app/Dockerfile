## Android SDK 30
FROM androidsdk/android-30

## Node.js Current (v15.x)
RUN apt update
RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash -
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update
RUN apt install -y gcc g++ make yarn nodejs

## Environment configuration
WORKDIR /app
COPY . .
CMD npm ci && npm start -- --host=0.0.0.0

## Run
# cd app
# docker build -t ionic .
# docker run --rm -it -p 9090:4200 -v $(pwd):/app ionic
