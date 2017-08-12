var muniRoutes = function(){
  var fs = require('fs');
  var initialData =[];

  var x = fs.readFileSync(__dirname+'/muniRoutes.txt', 'utf8');
  var stringed = x.toString().split('\n');
  for(var i in stringed){
  initialData.push([stringed[i]]);
  }

  var dataToArray = [];
  initialData.pop();
  initialData.forEach(function(arr){
  var remove = arr.toString();
  remove = remove.replace(/(\r\n|\n|\r)/gm,"");
  return (dataToArray.push(remove.split(',')));
  });
  var dummy = [];
  dataToArray.forEach(function(op, idx){
  dummy.push({'route_id': op[0], 'agency_id': op[1], 'route_short_name':op[2],'route_long_name': op[3],
  'route_desc': op[4], 'route_type': op[5], 'route_url': op[6], 'route_color': op[7], 'route_text_color': op[8]});
  });
  return dummy;
};


module.exports.muniRoutes = muniRoutes;
