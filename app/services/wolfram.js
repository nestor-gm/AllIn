var wolfram = require('wolfram').createClient("H7A727-5AU9V96GJW")


wolfram.query("coin flip", function(err, result) {
    if(err) throw err
    console.log("Result: %j", result[1].subpods[0].value.split("\n")[1])
  })