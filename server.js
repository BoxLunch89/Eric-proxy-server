const express = require('express');
const axios = require('axios');

const app = express();

app.use('/:id', express.static(`${__dirname}/public`));

app.use('/reviews', (req, res) => {
  axios.get(`http://127.0.0.1:3001${req.originalUrl}`)
    .then(moduleServerRes => moduleServerRes.data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send();
    });
});

app.use('/overview', (req, res) => {
  axios.get(`http://127.0.0.1:3002${req.originalUrl}`)
    .then(moduleServerRes => moduleServerRes.data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send();
    });
});

app.use('/nearby', (req, res) => {
  axios.get(`http://127.0.0.1:3003${req.originalUrl}`)
    .then(moduleServerRes => moduleServerRes.data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send();
    });
});

app.use('/q-and-a', (req, res) => {
  axios.get(`http://127.0.0.1:3004${req.originalUrl}`)
    .then(moduleServerRes => moduleServerRes.data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send();
    });
});

app.use('/recommendations', (req, res) => {
  axios.get(`http://127.0.0.1:3005${req.originalUrl}`)
    .then(moduleServerRes => moduleServerRes.data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send();
    });
});

app.listen(3000, () => {
  console.log('Proxy Server running at http://localhost:3000');
});
