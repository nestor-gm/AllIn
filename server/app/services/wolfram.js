var wolfram = require('wolfram').createClient("H7A727-5AU9V96GJW")


function coinFlip() {
  return new Promise((resolve, reject) => {
    wolfram.query("coin flip", function(err, result) {
        if(err) throw err
        result = result[1].subpods[0].value.split("\n")[1]
        let resultado = {result}
        resolve(resultado)
      })
  })
}


module.exports = { coinFlip }