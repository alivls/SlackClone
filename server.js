const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<center>Hello world</center> ');
});

// больше не хуйни
app.get('/hello/:name', (req, res) => {
  const {
    name,
  } = req.params;
  res.send(`<center>Hello ${name}</center> `);
});

app.listen(3005 || undefined, () => {
  console.log('Server started');
});
