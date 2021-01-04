
const pais = require('../config/comandos.js').argv;
const axios = require('axios');
const { obtenerCapital } = require('../capitales/capitales.js');

const instance = axios.create({
  baseURL: `https://restcountries.eu/rest/v2/lang/es`
});

instance.get()
        .then(resp => {
          obtenerCapital(resp);
        })
        .catch(err => {
          console.log('Error en la busqueda');
        });
