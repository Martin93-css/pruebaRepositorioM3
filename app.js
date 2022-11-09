/* requerir módulo autos */
let autosImportados = require("./autos.js");
const concesionaria = {
  /* completar */
  autos: autosImportados,
  buscarAutos: function (patentes) {
    let autoADevolver = this.autos.find(function (patente) {
      return patente.patente == patentes;
    });

    if (autoADevolver == undefined) {
      return null;
    } else {
      return autoADevolver;
    }
  },
  venderAuto: function (patente) {
    let autoVendido = this.buscarAutos(patente);

    if (autoVendido != null) {
      autoVendido.vendido = true;
      return autoVendido;
    } else {
      return "Auto no encontrado";
    }
  },
  autosParaLaVenta: function () {
    let autosSinVender = this.autos.filter(function (auto) {
      return auto.vendido == false;
    });

    return autosSinVender;
  },
  /* María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.

¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.
 */

  autosNuevos: function () {
    let autosNuevos = this.autosParaLaVenta().filter(function (kilometraje) {
      return kilometraje.km < 100;
    });
    return autosNuevos;
  },

  listaDeVentas: function () {
    let filtroVentas = this.autos.filter(function (vendido) {
      return vendido.vendido == true;
    });
    let listaDeAutosVendidos = filtroVentas.map(function (precios) {
      return precios.precio;
    });

    return listaDeAutosVendidos;
  },
  totalDeVentas: function () {
    let suma = this.listaDeVentas().reduce(function(acumulador , ventas){
        return acumulador + ventas})
        return suma
  },
  puedeComprar: function (auto , unaPersona){
    let cuotas = auto.precio / auto.cuotas
    if
    (auto.precio < unaPersona.capacidadDePagoTotal
  && cuotas < unaPersona.capacidadDePagoEnCuotas){
       return true }
       else { return false}
 
    }
};

console.log(concesionaria.totalDeVentas());
// console.log(concesionaria.autosParaLaVenta())

/* 
console.log(concesionaria.buscarAutos("JJK116"));
console.log(concesionaria.buscarAutos("123dsaf")) */
