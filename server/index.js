const nr = require('newrelic');
const express = require('express');
const app = express();
const axios = require('axios');

require('dotenv').config();
const port = process.env.PROXY_PORT || 2001;
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));


app.get('/reviews/:id', (req, res) => {
  const id = req.params.id
  // additional items
  axios.get(`/reviews/${id}`)
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})