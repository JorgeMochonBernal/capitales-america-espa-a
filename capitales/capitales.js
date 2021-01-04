const pais = require('../config/comandos.js').argv;

let capitales = [];

let obtenerCapital = (resp) => {
  for (let i = 0; i < resp.data.length; i++) {
    capitales.push(resp.data[i].capital);
  }

  mosrtrarCapital();
}

mosrtrarCapital = () => {
  switch (pais.comandos) {
    case 'Argentina':
      const argentina = capitales.filter(capital => capital === 'Buenos Aires');

      argentina.forEach(capital => {
        console.log("La capital de Argentina es" + " " + capital);
      });
      break;
    case 'Belice':
      const belmopan = capitales.filter(capital => capital === 'Belmopan');

      belmopan.forEach(capital => {
        console.log("La capital de Belice es" + " " + capital);
      });
      break;
    case 'Bolivia':
      const bolivia = capitales.filter(capital => capital === 'Sucre');

      bolivia.forEach(capital => {
        console.log("La capital de Bolivia es" + " " + capital);
      });
      break;
    case 'Chile':
      const santiago = capitales.filter(capital => capital === 'Santiago');

      santiago.forEach(capital => {
        console.log("La capital de Chile es" + " " + capital);
      });
      break;
    case 'Colombia':
      const colombia = capitales.filter(capital => capital === 'Bogotá');

      colombia.forEach(capital => {
        console.log("La capital de Colombia es" + " " + capital);
      });
      break;
    case 'Costa Rica':
      const costa = capitales.filter(capital => capital === 'San José');

      costa.forEach(capital => {
        console.log("La capital de Costa Rica es" + " " + capital);
      });
      break;
    case 'Cuba':
      const cuba = capitales.filter(capital => capital === 'Havana');

      cuba.forEach(capital => {
        console.log("La capital de Cuba es" + " " + capital);
      });
      break;
    case 'República Dominicana':
      const dominicana = capitales.filter(capital => capital === 'Santo Domingo');

      dominicana.forEach(capital => {
        console.log("La capital de República Dominicana es" + " " + capital);
      });
      break;
    case 'Ecuador':
      const ecuador = capitales.filter(capital => capital === 'Quito');

      resultado.forEach(capital => {
        console.log("La capital de Ecuador es" + " " + capital);
      });
      break;
    case 'El Salvador':
      const salvador = capitales.filter(capital => capital === 'San Salvador');

      salvador.forEach(capital => {
        console.log("La capital de El Salvador es" + " " + capital);
      });
      break;
    case 'Guinea Ecuatoria':
      const guinea = capitales.filter(capital => capital === 'Malabo');

      guinea.forEach(capital => {
        console.log("La capital de Guinea Ecuatoria es" + " " + capital);
      });
      break;
    case 'Guam':
      const guam = capitales.filter(capital => capital === 'Hagåtña');

      guam.forEach(capital => {
        console.log("La capital de Guam es" + " " + capital);
      });
      break;
    case 'Guatemala':
      const guatemala = capitales.filter(capital => capital === 'Guatemala City');

      guatemala.forEach(capital => {
        console.log("La capital de España es" + " " + capital);
      });
      break;
    case 'Honduras':
      const honduras = capitales.filter(capital => capital === 'Tegucigalpa');

      honduras.forEach(capital => {
        console.log("La capital de Honduras es" + " " + capital);
      });
      break;
    case 'Mexico':
      const mexico = capitales.filter(capital => capital === 'Mexico City');

      mexico.forEach(capital => {
        console.log("La capital de Mexico es" + " " + capital);
      });
      break;
    case 'Nicaragua':
      const nicaragua = capitales.filter(capital => capital === 'Managua');

      nicaragua.forEach(capital => {
        console.log("La capital de Nicaragua es" + " " + capital);
      });
      break;
    case 'Panama':
      const panama = capitales.filter(capital => capital === 'Panama City');

      panama.forEach(capital => {
        console.log("La capital de Panama es" + " " + capital);
      });
      break;
    case 'Paraguay':
      const paraguay = capitales.filter(capital => capital === 'Asunción');

      paraguay.forEach(capital => {
        console.log("La capital de Paraguay es" + " " + capital);
      });
      break;
    case 'Peru':
      const peru = capitales.filter(capital => capital === 'Lima');

      peru.forEach(capital => {
        console.log("La capital de Peru es" + " " + capital);
      });
      break;
    case 'San Juan':
      const juan = capitales.filter(capital => capital === 'San Juan');

      juan.forEach(capital => {
        console.log("La capital de San Juan es" + " " + capital);
      });
      break;
    case 'Uruguay':
      const uruguay = capitales.filter(capital => capital === 'Montevideo');

      uruguay.forEach(capital => {
        console.log("La capital de Uruguay es" + " " + capital);
      });
      break;
    case 'Venezuela':
      const venezuela = capitales.filter(capital => capital === 'Caracas');

      venezuela.forEach(capital => {
        console.log("La capital de Venezuela es" + " " + capital);
      });
      break;
    case 'España':
      const resultado = capitales.filter(capital => capital === 'Madrid');

      resultado.forEach(capital => {
        console.log("La capital de España es" + " " + capital);
      });
      break;
    default:
      console.log('No tenemos esa informacion,disculple las molestias');

  }
}

module.exports = {
  obtenerCapital
}
