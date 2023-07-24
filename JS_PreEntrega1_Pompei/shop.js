//declaracion de variables
const IVA = 0.21;
let cuenta = 0;
let servicio = 0;
let impresion = 0;
let talleRemera = 0;
let cantidadDeEstampados = 0;
let medidaDeViniloSolvente = 0;
let medidaDeViniloLatex = 0;
let valorFrente = 0;
let valorEspalda = 0;
let valorFyE = 0;
let cantidad = 0;
let nombre = "";
let seguirComprando = 0;
//FUNCIONES
function solictarNombre() {
    do {
        nombre = prompt("Ingresa tu nombre");
        if (nombre == "") {
            alert("Ingresa un nombre por favor.")
        }
    } while (nombre == "");
}

function menu() {
    do {
        servicio = 0;
        impresion = 0;
        talleRemera = 0;
        medidaDeViniloSolvente = 0;
        medidaDeViniloLatex = 0;
        cantidadDeEstampados = 0;
        servicio = parseInt(prompt("Hola " + nombre + "\nElegi el servicio:\n1_Impresiones \n2_Remeras Estampadas "))
        if ((servicio != 1) && (servicio != 2)) {
            alerta()
        }
    } while ((servicio != 1) && (servicio != 2));
}

function alerta() {
    alert("Elegi una opcion de la lista!")
}

function SolventeMedida(){
    do {
        medidaDeViniloSolvente = 0
        let solvente1x1 = impresion * 100
        let solvente2x1 = impresion * 200
        let solvente3x1 = impresion * 300
        medidaDeViniloSolvente = parseInt(prompt(nombre + " Elegi la medida de tu vinilo impreso con Solvente: \n1_ 1mtr. x 1mtr. ($"+ solvente1x1 + ")\n2_ 2mtr. x 1mtr. ($"+ solvente2x1 +")\n3_ 3mtr. x 1mtr. ($"+ solvente3x1 +") \n4_Volver al Menu anterior"))
        switch (medidaDeViniloSolvente) {
            case 1:                
                break;
            case 2:                
                break;
            case 3:                
                break;
            case 4:                
                break;
            default:
                medidaDeViniloSolvente = 0
                alerta()
                break;
        }
    } while (medidaDeViniloSolvente == 0)
}
    
function LatexMedida(){
    do {
        medidaDeViniloLatex = 0
        let latex1x1 = impresion * 100
        let latex2x1 = impresion * 200
        let latex3x1 = impresion * 300
        medidaDeViniloLatex = parseInt(prompt(nombre + " Elegi la medida de tu vinilo Impreso con Latex: \n1_ 1mtr. x 1mtr. ($"+ latex1x1 + ")\n2_ 2mtr. x 1mtr. ($"+ latex2x1 +")\n3_ 3mtr. x 1mtr. ($"+ latex3x1 +") \n4_Volver al Menu anterior"))
        switch (medidaDeViniloLatex) {
            case 1:                
                break;
            case 2:                
                break;
            case 3:                
                break;
            case 4:                
                break;
            default:
                medidaDeViniloLatex = 0
                alerta()
                break;
        }
    } while (medidaDeViniloLatex == 0)
}

function Estampados(){
    do {
        cantidadDeEstampados = 0
        valorFrente = talleRemera * 100
        valorEspalda = talleRemera * 200
        valorFyE = valorEspalda + valorFrente
        cantidadDeEstampados = parseFloat(prompt("Cuantos estampados vas querer: \n1_Frente ($" + valorFrente +") \n2_Espalda ($" +  valorEspalda+")" +"\n3_Frente y espalda ($" + valorFyE +")" + "\n4_Volver al menu anterior"))
        switch (cantidadDeEstampados){
            case 1:                
                break;
            case 2:                
                break;
            case 3:                
                break;
            case 4:                
                break;
            default:
                cantidadDeEstampados = 0
                alerta()
                break;
        }
    }while(cantidadDeEstampados == 0)
}

function continuarCompra(){
    seguirComprando = parseInt(prompt("El valor del producto selecionado es:\nSubtotal: $" + subtotal + "\nIVA: $" + impuestos + "\nTotal: $" + total + "\n1_Seguir comprando\n2_Finalizar"))
        switch(seguirComprando){
            case 1:
                break;
            case 2:
                break;
            default:
                seguirComprando = 1
                break;
        }
}

//INGRESAR USUARIO
solictarNombre()

//SELECCION DE SERVICIO
do {
    console.log(cuenta)
    seguirComprando = 0;
    do {
        menu()
        switch (servicio) {
            case 1:
                do {
                    impresion = 0
                    medidaDeViniloLatex = 0
                    medidaDeViniloSolvente = 0
                    impresion = parseInt(prompt(nombre + " Elegi el tipo de impresion para tu vinilo: \n1_Solvente ($100 x M2) \n2_Latex ($200 x M2)\n3_Volver al Menu anteriror"))                
                    switch (impresion) {
                        case 1:
                            SolventeMedida()                                               
                            break;
    
                        case 2:
                            LatexMedida()
                            break;
                        case 3:
                            impresion = 3
                            break;
                        default:
                            impresion = 0
                            alerta()
                            break;
                    }
                } while ((impresion == 0) || (medidaDeViniloLatex == 4) || (medidaDeViniloSolvente == 4))
                break;
                
            case 2:
                do {
                    talleRemera = 0
                    cantidadDeEstampados = 0
                    talleRemera = parseInt(prompt("Elegi el talle de tu remera: \n1_S ($200) \n2_M ($400) \n3_L ($600) \n4_XL ($800) \n5_Volver al Menu anterior"))
                    switch (talleRemera) {
                        case 1:
                            Estampados()
                            break;
                        case 2:
                            Estampados()
                            break;
                        case 3: 
                            Estampados()
                            break;
                        case 4: 
                            Estampados()
                            break;
                        case 5:
                            talleRemera = 5
                            break;
                        default:
                            alerta()
                            talleRemera = 0
                            break;
                    }
                } while ((talleRemera == 0) || (cantidadDeEstampados == 4))
                break;
    
            default:
                servicio = 0
                alerta()
                break;
        }
    } while ( (servicio == 0) || (impresion == 3) || (talleRemera == 5));
    
    cantidad = parseFloat(prompt("Cuantas unidades vas a querer:"));
    
    console.log("logs finales")
    console.log("Servicio: " + servicio)
    console.log("Tipo de impresion: " + impresion)
    console.log("Medida de Vinilo Solvente: " + medidaDeViniloSolvente)
    console.log("Medida de Vinilo Latex: " + medidaDeViniloLatex)
    console.log("Talle de Remera: " + talleRemera)
    console.log("Cantidad de Estampados: " + cantidadDeEstampados)
    console.log("Valor de Estampados Frente " + valorFrente )
    console.log("Valor de Estampados Espalda " + valorEspalda )
    console.log("Valor de Estampados Frente y Espalda " + valorFyE )
    console.log("Unidades: " + cantidad)
    
    let precioSolvente = 100;
    let precioLatex = 200;
    let precioRemera = 200;
    const multiplicacion = (valor1, valor2, valor3) => (valor1 * valor2) * valor3;
    const calculoIva = (valor1) => (valor1)* IVA;
    
    if((servicio == 1) && (impresion == 1)){
        subtotal = multiplicacion(precioSolvente, medidaDeViniloSolvente, cantidad)
        impuestos = calculoIva(subtotal);
        total = subtotal + impuestos;
        cuenta += total;
        continuarCompra();
    }else if((servicio ==1) && (impresion == 2)){
        subtotal = multiplicacion(precioLatex, medidaDeViniloLatex, cantidad)
        impuestos = calculoIva(subtotal);
        total = subtotal + impuestos;
        cuenta += total;
        continuarCompra();
    }else if((servicio == 2) && (cantidadDeEstampados == 1)){
        subtotal = multiplicacion(precioRemera, talleRemera, cantidad) + valorFrente;
        impuestos = calculoIva(subtotal);
        total = subtotal + impuestos;
        cuenta += total
        continuarCompra();
    }else if((servicio == 2) && (cantidadDeEstampados == 2)){
        subtotal = multiplicacion(precioRemera, talleRemera, cantidad) + valorEspalda;
        impuestos = calculoIva(subtotal);
        total = subtotal + impuestos;
        cuenta += total
        continuarCompra();
    }else if((servicio == 2) && (cantidadDeEstampados == 3)){
        subtotal = multiplicacion(precioRemera, talleRemera, cantidad) + valorFyE;
        impuestos = calculoIva(subtotal);
        total = subtotal + impuestos;
        cuenta += total
        continuarCompra()
    }else{
        alert("La compra fallo! Volve a intentarlo por favor")
    }
}while(seguirComprando == 1)

console.log(cuenta)
alert("El valor total de tu compra es: $" + cuenta)

                
                
                