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


app.get('/api/restaurants', dbCtrl.getAllRestaurants);
app.post('/api/addRestaurant', dbCtrl.createRestaurant);
app.delete('/api/restaurant/:id', dbCtrl.deleteRestaruant);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});