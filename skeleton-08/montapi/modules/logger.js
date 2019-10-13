
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
     json: true
     //stringify: (obj) => JSON.stringify(obj)
    })
  ]
})

module.exports = logger;