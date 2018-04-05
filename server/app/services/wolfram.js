var wolfram = require('wolfram').createClient("H7A727-5AU9V96GJW")


function coinFlip() {
  wolfram.query("coin flip", function(err, result) {
      if(err) throw err
      let resultado = result[1].subpods[0].value.split("\n")[1]
      return resultado
    })
}



module.exports = { coinFlip }