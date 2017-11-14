'use strict';

const express = require('express');
const router = express.Router()

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/user', (req, res) => {
  res.json({
    "henning": "iscool",
    "jakob": "isderp"
  })
})



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
