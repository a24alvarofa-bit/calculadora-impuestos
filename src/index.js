function calcularImpuesto(precioBase, precioFinal) {
    const impuesto = precioFinal - precioBase;
    return (impuesto / precioBase) * 100;
}

console.log(calcularImpuesto(100, 21));

function calcularPrecioFinal(precio, porcentaje) {
    const impuesto = calcularImpuesto(precio, porcentaje);
    return precio + impuesto;
}

console.log(calcularPrecioFinal(100, 21));

function calcularTotalCompra(precio, unidades, porcentaje) {
    const subtotal = precio * unidades;
    return calcularPrecioFinal(subtotal, porcentaje);
}

console.log(calcularTotalCompra(10, 3, 21));