

const http = require('http')

function getData(msg) {
  return JSON.stringify({
      message : msg,
      elastic_index: "tapi",
      created: (new Date()).toISOString(),
      class: "event.ruv.de/common",
      owner: "ZI-AI-ST-CT",
      severity: "CRITICAL",
      priority: 3,
      category: "Availability",
      correlation_id: "ci02222",
      briefdescription: "End2End Monitoring Event",
      description: msg,
      documentation: "http://www.insure69.de/reference",
      hostname: "lx12345",
      ip_addr: "169.254.169.254",
      container_image: "insure69/car:1.1.0",
      source: "End2End",
      sub_source: "Insure69_E2E_Monitor",
      origin: "SitePerformer",
      sub_origin: "Login-Page",
      it_service: "Web-Portal",
      business_service: "Car Insurance",
      tags: "insure69.com"
  });
}

function getOptions(data) {
  return options = {
    hostname: 'localhost',
    port: 3001,
    path: '/service/monitoring/test/api/v1/logmsg',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }
}

var data = getData("Hello World!");
var options = getOptions(data);

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d + "\n")
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
console.log("")
req.end()
