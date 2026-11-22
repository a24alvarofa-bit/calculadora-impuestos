function calcularImpuesto(precioBase, precioFinal) {
    const impuesto = precioFinal - precioBase;
    return (impuesto / precioBase) * 100;
}

console.log(calcularImpuesto(100, 121));

function calcularPrecioFinal(precioBase, porcentaje) {
    if (precioBase < 0 || porcentaje < 0) {
        throw new Error("El precio y el porcentaje no pueden ser negativos");
    }
    const importeImpuesto = precioBase * porcentaje / 100;
    return precioBase + importeImpuesto;
}

console.log(calcularPrecioFinal(100, 21));

function calcularTotalCompra(precio, unidades, porcentaje) {
    const subtotal = precio * unidades;
    return calcularPrecioFinal(subtotal, porcentaje);
}

console.log(calcularTotalCompra(10, 3, 21));