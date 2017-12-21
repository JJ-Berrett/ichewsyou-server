'use strict';
let massive = require('massive');

let connectionString =  process.env.PSQL_DB || 'postgres://vbmecwum:G9deex09hG3XAPiR7mzDHiY010Rd5EKJ@baasu.db.elephantsql.com:5432/vbmecwum';
let massiveInstance = massive.connectSync({connectionString});
module.exports = massiveInstance;
