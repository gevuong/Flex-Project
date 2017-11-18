var bartStationModel = require('../models/bartStationModel');
var bart = require('../seed-stations/bartStations');

module.exports = function(app) {
  app.get('/api/bartStations', function(req, res) {
    let bartStationsArray = bart.bartStations();

    bartStationModel.create(bartStationsArray, function(err, results){
      if (err) {
        return console.log(err);
      }
      // console.log('-----1',results);
      res.send(results);
    });
  });
};
//
