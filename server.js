'use strict';
let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let dbCtrl = require('./db/dbctrl');
let port = process.env.PORT || 8085;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(express.static('./public'));


app.get('/api/restaurants', dbCtrl.getRestaurants);
app.post('/api/restaurant', dbCtrl.createRestaurant);
app.delete('/api/restaurant/:id', dbCtrl.deleteRestaurant);
app.get('/api/restaurant/:id', dbCtrl.getRestaurant);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
