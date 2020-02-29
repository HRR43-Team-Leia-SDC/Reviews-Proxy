const nr = require('newrelic');
const express = require('express');
const app = express();
const axios = require('axios');

require('dotenv').config();
const port = process.env.PROXY_PORT || 2001;
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.get("/loaderio-e7b42a6a6a4087ba64aea98d8dfe54d9.txt", (req,res) => {
        console.log('loader');
  res.sendFile('/home/ubuntu/repos/Reviews-Proxy/server/loaderio-e7b42a6a6a4087ba64aea98d8dfe54d9.txt');
});

app.get('/reviews/:id', (req, res) => {
  const id = req.params.id
	console.log(`http://18.222.238.58:2000/reviews/${id}`);
  // additional items
  axios.get(`http://18.222.238.58:2000/reviews/${id}`)
    .then((response) => {
      res.status(200).json(response.data);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
