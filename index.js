const {iva, ivaVehiculos, ivaCanastaFamiliar} = require("./modulos/iva");
const log = require("./modulos/logs")

console.log(`El valor del iva es: ${iva}`);
console.log(`El valor del iva es: ${ivaVehiculos}`);
console.log(`El valor del iva es: ${ivaCanastaFamiliar}`);

log.info("Hola");

console.log("\n\n");

log.info(`${faker.name.findName()}`)