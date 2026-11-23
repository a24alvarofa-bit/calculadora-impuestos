/**
 * Calcula el porcentaje de impuesto aplicado a un precio base.
 * 
 * @param {number} precioBase - precio antes de aplicar el impuesto.
 * @param {number} precioFinal - precio después de aplicar el impuesto.
 * @returns {number} Porcentaje de impuesto aplicado
 */

function calcularImpuesto(precioBase, precioFinal) {
    const impuesto = precioFinal - precioBase;
    return (impuesto / precioBase) * 100;
}

console.log(calcularImpuesto(100, 121));

/**
 * Calcula el precio final sumando el impuesto al precio base
 * 
 * @param {number} precioBase - Precio antes de aplicar el impuesto.
 * @param {number} porcentaje - Porcentaje de impuesto que se aplica.
 * @returns {number} Precio final con el impuesto incluído.
 * @throws {Error} Si el precio base o el porcentaje son negativos.
 */

function calcularPrecioFinal(precioBase, porcentaje) {
    if (precioBase < 0 || porcentaje < 0) {
        throw new Error("El precio y el porcentaje no pueden ser negativos");
    }
    const importeImpuesto = precioBase * porcentaje / 100;
    return precioBase + importeImpuesto;
}

console.log(calcularPrecioFinal(100, 21));

/**
 * Calcula el importe total de una compra con impuestos incluidos.
 * 
 * @param {number} precio - Precio unitario del producto.
 * @param {number} unidades - Número de unidades compradas.
 * @param {number} porcentaje - Porcentaje de impuesto aplicado.
 * @returns {number} Importe total de la compra con impuestos.
 */

function calcularTotalCompra(precio, unidades, porcentaje) {
    const subtotal = precio * unidades;
    return calcularPrecioFinal(subtotal, porcentaje);
}

console.log(calcularTotalCompra(10, 3, 21));