
const argv = require('yargs').options({
  comandos: {
    demand: true,
    alias: 'p',
    desc: 'Escribe el pais que desea saber su capital'
  }
}).argv

module.exports = {
  argv
}
