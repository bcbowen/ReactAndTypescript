#!/usr/bin/env node

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hey dude');
});

app.listen(3005, () => {
  console.log('listening on 3005');
});
