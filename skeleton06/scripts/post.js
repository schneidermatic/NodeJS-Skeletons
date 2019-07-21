
var request = require('request')

var jsData = {
    'name' : 'Learning AWS',
    'time' : Date.now()
}

request.post({url:'http://localhost:3000/create', jsData: jsData}, function optionalCallback(err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
  });
