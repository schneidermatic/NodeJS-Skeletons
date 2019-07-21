
var request = require('request')

request.get({
    url: 'http://localhost:3000/v1/todos'
  }, function(error, res, body){
     if (error) {
      console.error(error)
      return
     }
    console.log(`statusCode: ${res.statusCode}`)
    console.log(body)
  }
);