
var gastoTotal = 500;

var caja1 = 100;
var jarabe1 = 100;
var expectorante1 = 150;
var iva1 = 0.1;
var colectivo1 = 0;
var nombre1 = "Marzocca";

var caja2 = 90;
var jarabe2 = 140;
var expectorante2 = 100;
var iva2 = 0.15;
var colectivo2 = 0;
var nombre2 = "Florit";


let farmacia = function(cole, cajas, exp, jarabe, iva, nombre){
  let gasto = (cajas*2 + jarabe + exp) + (cajas*2 + jarabe + exp)*iva + cole;
  console.log("En la farmacia "+nombre+" gasta: " + gasto);
    return gasto;
}

let f1 = farmacia(colectivo1, caja1, expectorante1, jarabe1, iva1, nombre1)
let f2 = farmacia(colectivo2, caja2, expectorante2, jarabe2, iva2, nombre2);

if (f1 > f2)
  console.log("Tenes que ir a "+nombre2)
else 
  console.log("Tenes que ir a "+nombre1)


