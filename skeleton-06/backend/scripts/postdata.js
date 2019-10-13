
var request = require('request')

var jsDataObj = {
    "name" : "Learning AWS",
    "time" : Date.now()
}

request.post({
    url: 'http://localhost:3000/v1/todos',
    body: jsDataObj,
    json: true
  }, function(error, res, body){
     if (error) {
      console.error(error)
      return
     }
    console.log(`statusCode: ${res.statusCode}`)
    console.log(body)
  }
);