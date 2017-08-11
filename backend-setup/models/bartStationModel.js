var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bartStationSchema = new Schema({
  stop_id: String,
  stop_name: String,
  stop_desc: Number,
  stop_lat: Number,
  stop_lon: Number,
  zone_id: String,
  stop_url: String,
  location_type: String,
  parent_station: Number,
  platform_code: String,
  wheelchair_boarding: Number
});

var bartStations = mongoose.model('bartStations', bartStationSchema);

module.exports = bartStations;
