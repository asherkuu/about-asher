// @ts-ignore
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const CONSTANTS = {
    MONGO_USER: process.env.NEXT_PUBLIC_MONGO_USER,
    MONGO_PWD: process.env.NEXT_PUBLIC_MONGO_PWD,
    MONGO_DBNAME: process.env.NEXT_PUBLIC_MONGO_DBNAME,
  };
  const { MONGO_USER, MONGO_PWD, MONGO_DBNAME } = CONSTANTS;

  const server = express();

  server.all('*', (res: any, req: any) => {
    return handle(res, req);
  });

  mongoose.connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PWD}@cluster0.qmfoa.mongodb.net/${MONGO_DBNAME}?retryWrites=true&w=majority`,
    { keepAlive: true, keepAliveInitialDelay: 300000, useNewUrlParser: true },
  );

  mongoose.connection.on('connected', () => {
    console.log('Connect Success');

    const PORT = process.env.NEXT_PUBLIC_PORT || 3000;
    server.listen(PORT, (err: any) => {
      err && console.log(err);
      console.log(`> Ready on localhost:${PORT}`);
    });
  });

  mongoose.connection.on('error', (error: any) => {
    console.log('error', error);
  });
});
