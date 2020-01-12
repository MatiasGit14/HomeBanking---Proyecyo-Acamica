//Declaración de variables
var nombreUsuario = "Lionel Gomez";
var saldoCuenta = 10250;
var limiteExtraccion = 2000;
var deposito = "";
var retiro = "";
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga = 1234567;
var cuentaAmiga2 = 7654321;
var servicio = "";
var transferencia = "";
var cuenta = "";
var clave = 1234;
var saldoCuentaDolares = 0;
var tc = 50;
var dolares = "";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    actualizarDolaresEnPantalla();
    iniciarSesion();
}

//Funciones creadas por mi

function sumarDinero(sumar) {

    saldoCuenta += sumar;
}

function restarDinero(restar) {

    saldoCuenta -= restar;
}

function billetesCien(monto) {
    if (monto % 100 == 0) {
        return false;
    } else {
        return true;
    }

}

function saldoInsuficiente(monto) {
    if (monto <= saldoCuenta) {
        return false;
    } else {
        return true;
    }
}

function limiteInsuficiente(monto) {
    if (monto <= limiteExtraccion) {
        return false;
    } else {
        return true;
    }
}

function compra(monto) {
    if ((monto * tc) <= saldoCuenta) {
        return true;
    } else {
        return false;
    }
}




function dolaresCompra() {
    dolares = (parseInt(prompt("Ingrese el monto en dolares que desea comprar: ", 0)));
    if (isNaN(dolares) || dolares <= 0) {
        alert("Ingrese un valor numerico, o un monto mayor a cero.");
    } else if (compra(dolares)) {
        saldoAnteriorDolares = saldoCuentaDolares;
        saldoCuenta = saldoCuenta - dolares * tc;
        saldoActualDolares = saldoCuentaDolares + dolares;
        saldoCuentaDolares = saldoCuentaDolares + dolares;
        alert("Ha comprado: U$S " + dolares + "\nSaldo Anterior en Dolares: U$S " + saldoAnteriorDolares + "\nSaldo Actual en Dolares: U$S " + saldoActualDolares);
        actualizarDolaresEnPantalla(dolares);
        actualizarSaldoEnPantalla();

    } else {
        alert("No cuenta con saldo suficiente en su cuenta en pesos para comprar esa cantidad de dolares.");
    }
}

function dolaresVenta() {
    dolares = (parseInt(prompt("Ingrese el monto en dolares que desea vender: ", 0)));
    if (isNaN(dolares) || dolares <= 0) {
        alert("Ingrese un valor numerico, o un monto mayor a cero.");
    } else if (dolares <= saldoCuentaDolares) {
        saldoCuenta = saldoCuenta + dolares * tc;
        saldoAnteriorDolares = saldoCuentaDolares;
        saldoActualDolares = saldoCuentaDolares - dolares;
        saldoCuentaDolares = saldoCuentaDolares - dolares;
        alert("Ha vendido: U$S" + dolares + "\nSaldo Anterior en Dolares: U$S " + saldoAnteriorDolares + "\nSaldo Actual en Dolares: U$S " + saldoActualDolares);
        actualizarDolaresEnPantalla(dolares);
        actualizarSaldoEnPantalla();

    } else {
        alert("No cuenta con saldo suficiente en su cuenta en dolares.");
    }
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    limite = (parseInt(prompt("Ingrese nuevo monto de extraccion: ", 0)));
    if (isNaN(limite) || limite <= 0) {
        alert("Ingrese un valor numerico, o un monto mayor a cero.");
    } else {
        limiteExtraccion = limite;
        actualizarLimiteEnPantalla(limite);
        alert("Su nuevo limite de extraccion es: $" + limite);
    }
}


function extraerDinero() {
    retiro = (parseInt(prompt("Ingrese el monto a retirar: ", 0)));
    if (isNaN(retiro) || retiro <= 0) {
        alert("Ingrese un valor numerico, o un monto mayor a cero.")
    } else if (saldoInsuficiente(retiro)) {
        alert("No tiene saldo suficiente");
    } else if (limiteInsuficiente(retiro)) {
        alert("Su limite de extraccion es de: $" + limiteExtraccion);
    } else if (billetesCien(retiro)) {
        alert("Solo se permiten retiros en billetes de $100");
    } else {
        saldoAnterior = saldoCuenta;
        saldoActual = saldoCuenta - retiro;
        restarDinero(retiro);
        actualizarSaldoEnPantalla(retiro);
        alert("Ha retirado: $" + retiro + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo Actual: $" + saldoActual);
    }
}

function depositarDinero() {
    deposito = (parseInt(prompt("Ingrese el monto a depositar: ", 0)));
    if (isNaN(deposito) || deposito <= 0) {
        alert("Ingrese un valor numerico, o un monto mayor a cero.");
    } else {
        saldoAnterior = saldoCuenta;
        saldoActual = saldoCuenta + deposito;
        sumarDinero(deposito);
        actualizarSaldoEnPantalla(saldoActual);
        alert("Ha depositado: $" + deposito + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo Actual: $" + saldoActual);
    }
}

function pagarServicio() {
    servicio = (parseInt(prompt("Ingrese el numero que corresponde al servicio que desea pagar:  \n 1 - Agua: $350,00 \n 2 - Telefono: $425,00 \n 3 - Luz: $210,00 \n 4 - Internet: $570,00", 0)));
    switch (servicio) {
        case 1:
            if (saldoInsuficiente(agua)) {
                alert("No hay suficiente saldo en su cuenta para pagar este servicio.");
            } else {
                saldoAnterior = saldoCuenta;
                saldoActual = saldoCuenta - agua;
                restarDinero(agua);
                actualizarSaldoEnPantalla();
                alert("Ha pagado el servicio agua.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + agua + "\nSaldo Actual: $" + saldoActual);
            }
            break;
        case 2:
            if (saldoInsuficiente(telefono)) {
                alert("No hay suficiente saldo en su cuenta para pagar este servicio.");
            } else {
                saldoAnterior = saldoCuenta;
                saldoActual = saldoCuenta - telefono;
                restarDinero(telefono);
                actualizarSaldoEnPantalla();
                alert("Ha pagado el servicio telefono.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + telefono + "\nSaldo Actual: $" + saldoActual);
            }
            break;
        case 3:
            if (saldoInsuficiente(luz)) {
                alert("No hay suficiente saldo en su cuenta para pagar este servicio.");

            } else {
                saldoAnterior = saldoCuenta;
                saldoActual = saldoCuenta - luz;
                restarDinero(luz);
                actualizarSaldoEnPantalla();
                alert("Ha pagado el servicio luz.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + luz + "\nSaldo Actual: $" + saldoActual);
            }
            break;
        case 4:
            if (saldoInsuficiente(internet)) {
                alert("No hay suficiente saldo en su cuenta para pagar este servicio.");
            } else {
                saldoAnterior = saldoCuenta;
                saldoActual = saldoCuenta - internet;
                restarDinero(internet);
                actualizarSaldoEnPantalla();
                alert("Ha pagado el servicio internet.\nSaldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + internet + "\nSaldo Actual: $" + saldoActual);
            }
            break;
        default:
            alert("No existe la opcion seleccionada, por favor ingrese una opcion valida");
            break;
    }
}

function transferirDinero() {
    transferencia = (parseInt(prompt("Ingrese el monto a transferir: ", 0)));
    if (isNaN(transferencia) || transferencia <= 0) {
        alert("Ingrese un valor numerico, o un monto mayor a cero.");
    } else if (saldoInsuficiente(transferencia)) {
        alert("No tiene saldo suficiente para el monto que desea transferir. ");
    } else {
        cuenta = (parseInt(prompt("Ingrese el numero de cuenta al que desea realizar la transferencia", 0)));
        if (cuenta == 1234567 || cuenta == 7654321) {
            restarDinero(transferencia);
            actualizarSaldoEnPantalla();
            alert("Se han transferido: $" + transferencia + "\nCuenta destino: " + cuenta);
        } else {
            alert("Solo puede transferir dinero a una cuenta amiga");
        }
    }
}

function iniciarSesion() {
    codigo = (prompt("Ingrese su clave", 0));
    if (codigo == clave) {
        alert("Bienvenido " + nombreUsuario + " ya puede comenzar a realizar operaciones.");
    } else if (isNaN(codigo) || codigo != 1234) {
        alert("La clave consta de un numero de cuatro digitos.");
        alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    }
}
/* Agregar cuentas a transferir
    Comprar dolares*/

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

function actualizarDolaresEnPantalla() {
    document.getElementById("saldo-dolares").innerHTML = "Tu saldo en dolares es: U$S" + saldoCuentaDolares;
}