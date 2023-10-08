function calcularTotal() { 
    // se obtiene el valor del usuario
    const unidades = parseInt(document.getElementById('unidades').value);
    const precioUnitario = parseFloat(document.getElementById('precio').value);
    //se realiza la multiplicacion de las unidades y el precio
    let subtotal = unidades * precioUnitario;
    let descuento = 0;
    //se realiza el descuento
    if (unidades > 100) {
        descuento = subtotal * 0.4;// se obtiene el 40%
    } else if (unidades >= 25 && unidades <= 100) {
        descuento = subtotal * 0.2;// se obtiene el 20%
    } else if (unidades >= 10 && unidades <= 24) {
        descuento = subtotal * 0.1;// se obtiene el 10%
    }

    let total = subtotal - descuento;
     // se muestra el resultado en la pagina
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('descuento').textContent = descuento.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}