const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('<center>Hello world</center> ');
});
app.listen(3005 || undefined, () => {
  console.log('Server started');
});
