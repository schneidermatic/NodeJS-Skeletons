


var xobj = {
             "a": "A",
             "b": "B",
           }

var zobj = { 
             "a": "AAA"
           }


var xxxobj = {
               "logmsg": {
                  "teams": [
                    "Team-A",
                    "Team-B"
                  ]
               }
             }


//console.log(Object.keys(xobj));
//console.log(Object.keys(zobj));

for (key in xobj) {
    console.log(key);
    if (key in zobj) {
       console.log(key);
    }
}


console.log(xxxobj.logmsg.teams.length);
