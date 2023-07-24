//----------Constructor de objetos---------------//

class RemerasEstampadas {
    constructor(id, talle, color, modelo, precio){
        this.id = id
        this.talle = talle.toUpperCase()
        this.color = color.toUpperCase()
        this.modelo = modelo.toUpperCase()
        this.precio = precio
    }
}


//------------Instanciar Objetos------------------//
const producto1 = new RemerasEstampadas (1, "XL", "NEGRA", "RAMONES", 6000)

const producto2 = new RemerasEstampadas (2, "L", "BLANCA", "ACDC", 5000)

const producto3 = new RemerasEstampadas (3, "M", "ROJA", "ROLLING STONES", 4000)

const producto4 = new RemerasEstampadas (4, "XL", "BLANCA", "RAMONES", 6000)


//----------Arreglo de productos------------//
const stock = [producto1, producto2, producto3, producto4]

const carrito = []

console.log(stock)

//----------Funciones--------------------//
function menu(){
    let salirMenu = false
    do{
        salirMenu = elegirServicio (salirMenu)
    }while(!salirMenu)
}

function elegirServicio(salir){
    let opcionIngresada = parseInt(prompt(`Bienvenido
    1 - Ver productos disponibles
    2 - Buscar Productos
    3 - Agregar Producto    
    4 - Salir del Menu`))

    switch(opcionIngresada){
        case 1:
            productosDisponibles(stock)
        break;
        case 2: 
            filtrar()
        break;
        case 3:
            agregarProducto()
        break;
        case 4:
            alert("Gracias por su visita")
            salir= true
            return salir
        break;
        default:
            alert("Ingresa una opcion de la lista")
        break;
    }
}

//---------Funcion para ver productos de array---------//
function productosDisponibles(array){
    let listaDeProductos = array.forEach(productos => {
        alert(`Estos son nuestros productos disponibles:\n 
        ID: ${productos.id}        
        Modelo: ${productos.modelo}
        Talle: ${productos.talle}
        Color: ${productos.color}
        Precio: ${productos.precio}
        `)        
    });    
}
//---------Funcion para filtrar---------------//
function filtrar (array) {
    //-----Menu para filtrado-------//
    let opcionDeFiltrado = parseInt(prompt(`
        1_ Buscar Remeras por TALLE
        2_ Buscar Remeras por PRECIO
        3_ Buscar Remeras por MODELO
        4_ Buscar Remeras por COLOR
    `))
    switch(opcionDeFiltrado){
        case 1:
            productosPorTalle(array)
        break;
        case 2:
            productosPorPrecio(array)
        break;
        case 3:
            productosPorModelo(array)
        break;
        case 4:
            productosPorColor(array)
        break;
        default:
            alert("Elegi una opcion de la Lista")
        break
    }    
}
//-----Funciones de busqueda ------//
function productosPorTalle(){
    let talleBuscado = prompt("Ingresa el Talle que buscas")    
    let elementosEcontrados = stock.filter(p => p.talle == talleBuscado.toUpperCase())
    if(elementosEcontrados == 0){
        alert("No contamos con ese talle en Stock")
    }else{
        productosDisponibles(elementosEcontrados)
    }
}

function productosPorColor(){
    let colorBuscado = prompt("Ingresa el Color de remera que buscas")    
    let elementosEcontrados = stock.filter(p => p.color == colorBuscado.toUpperCase())
    if(elementosEcontrados == 0){
        alert("No contamos con ese color en Stock")
    }else{
        productosDisponibles(elementosEcontrados)
    }
}

function productosPorPrecio(){
    let precioBuscado = parseInt(prompt("Ingresa el precio buscado (Min: $4000 - Max:$6000)"))
    let elementosEcontrados = stock.filter(p => p.precio == precioBuscado)
    if(elementosEcontrados == 0){
        alert("No contamos con Remeras de ese Precio en Stock")
    }else{
        productosDisponibles(elementosEcontrados)
    }
}

function productosPorModelo(){
    let modeloBuscado = prompt("Ingresa el modelo de remera que buscas")    
    let elementosEcontrados = stock.filter(p => p.modelo == modeloBuscado.toUpperCase())
    if(elementosEcontrados == 0){
        alert("No contamos con ese modelo en Stock")
    }else{
        productosDisponibles(elementosEcontrados)
    }
}



//---------Funcion para agregar producto------//
function agregarProducto(){
    let talle = prompt("Ingresa el talle de la remera")
    let color = prompt("Ingresa el color de la remera")
    let modelo = prompt("Ingresa el modelo de la remera")
    let precio = parseInt(prompt("Ingresa el precio de la remera")) 
    let idNuevo = parseInt(prompt("Ingresa el ID de la remera"))

    
    const idDuplicado = stock.some((p) => p.id === idNuevo)
    if (!idDuplicado){
        let nuevoProducto = "producto" + idNuevo            
        nuevoProducto = new RemerasEstampadas(idNuevo, talle, color, modelo, precio)
    }else{
        alert("El ID ya existe, por favor ingresa uno diferente")
        agregarProducto()
    }
    
    console.log(nuevoProducto)
    stock.push(nuevoProducto)
}

menu()