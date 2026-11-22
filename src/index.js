function calcularImpuesto(precioBase, precioFinal) {
    const impuesto = precioFinal - precioBase;
    return (impuesto / precioBase) * 100;
}

console.log(calcularImpuesto(100, 121));

function calcularPrecioFinal(precioBase, porcentaje) {
    const importeImpuesto = precioBase * porcentaje / 100;
    return precioBase + importeImpuesto;
}

console.log(calcularPrecioFinal(100, 21));

function calcularTotalCompra(precio, cantidad, porcentaje) {
    const subtotal = precio * cantidad;
    return calcularPrecioFinal(subtotal, porcentaje);
}

console.log(calcularTotalCompra(10, 3, 21));