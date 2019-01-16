const express = require('express');

const app = express();

const cars = [
  'Audi',
  'Volga',
  'BMW',
];

// eslint-disable-next-line func-names
const filter = function () {
  const tmp = {};
  // eslint-disable-next-line no-return-assign
  return cars.filter(a => (a in tmp ? 0 : tmp[a] = 1));
};

app.get('/', (req, res) => {
  const car = filter(cars);
  res.send(car.join('<br>'));
});

app.get('/cars/add/:name', (req, res) => {
  const {
    name,
  } = req.params;
  cars.push(name);
  res.send('ok');
});

app.listen(3005 || undefined, () => {
  console.log('Server started!!!');
});
