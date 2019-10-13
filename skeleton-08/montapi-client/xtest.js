


var msgJson = {
                 "logmsg" : {
                     "severities": [
                         "UNKNOWN",
                         "HARMLESS",
                         "WARNING",
                         "MINOR",
                         "MAJOR",
                         "CRITICAL",
                         "FATAL"
                     ]
                 }
              }

var customMsg = {
    "message" : "This is a Test"
}


var defaultMsg = {
    "message" : "car.insure69.com: HTTP 503 - Service is unavailabe",
    "elastic_index" : "montapi",
    "created" : "na",
    "class" : "logmsg.insure69.com/monitoring/test/api/v1",
    "owner" : "Team-A",
    "severity": "CRITICAL",
    "priority": 5,
    "category": "Availability",
    "correlation_id": "CI01111",
    "brief_description": "car.insure69.com: HTTP 503 - Service is unavailabe",
    "description": "There seems to be a serious issue with the Container image",
    "documentation": "http://ops.insure69.com/docu",
    "hostname": "linux-12345",
    "ip_addr": "169.254.169.254",
    "container_image": "insure69/car:1.1.0",
    "source": "Synthetic Monitoring",
    "sub_source": "Car.Insure69_E2E_Monitor",
    "origin": "SyntheticGuard",
    "sub_origin": "Landing Page",
    "it_service": "Car Insure69 Portal Service",
    "business_service": "On Demand Car Insurance Business",
    "tags": "car.insure69.com"
};


function getCustomLogMsg(logmsg) {
     for (key in defaultMsg) { 
        if (key in logmsg) {
            defaultMsg[key] = logmsg[key]; 
        } 
     } 
        
     return defaultMsg;
}

for (key in getCustomLogMsg(customMsg)) {
    console.log(`${key} = ${defaultMsg[key]}`);
}
