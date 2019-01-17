const express = require('express');

const app = express();

const cars = [
  'Audi',
  'Volga',
  'BMW',
];
// filter
// eslint-disable-next-line func-names
// const filter = function () {
//   const tmp = {};
//   // eslint-disable-next-line no-return-assign
//   return cars.filter(a => (a in tmp ? 0 : tmp[a] = 1));
// };
// filter

app.get('/', (req, res) => {
  res.send(cars.join('<br>'));
});

app.get('/cars/add/:name', (req, res) => {
  const {
    name,
  } = req.params;

  function filters(cars, name) {
    for (let i = 0; i < cars.length; ++i) {
      if (cars[i] === name) {
        return res.send('Already have');
      }
    }
    res.send(`ok ${name} add`);
    return cars.push(name);
  }
  filters(cars, name);
});

app.listen(3005 || undefined, () => {
  console.log('Server started!!!');
});
