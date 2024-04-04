// -------------------------------------------
//           Variables Globales
// -------------------------------------------


// -------------------------------------------
//           Funciones Globales
// -------------------------------------------
function representarCardsProductos() {

    var cards = ''

    if(productos.length) {
        for(var i=0; i<productos.length; i++) {
            cards += '<section>'+
                        '<h3>' + productos[i].nombre + '</h3>' +
                        '<img class= "cards-img" src="' + productos[i].foto + '">' +
                        '<p><b style="color:yellow;"><u>Descripción</u>:</b> ' + productos[i].descripcionLarga + '</p>' +
                        '<p><b style="color:yellow;"><u>Marca</u>:</b> ' + productos[i].marca + '</p>' +
                        '<p><b style="color:yellow;"><u>Precio</u>:</b> $' + productos[i].precio + '</p>' +
                        '<p><b style="color:yellow;"><u>Stock</u>:</b> ' + productos[i].stock + (productos[i].stock<2? ' unidad':' unidades') + '</p>' +
                        '<p><b style="color:yellow;"><u>Envío</u>:</b> ' + (productos[i].envio? 'Si':'No') + '</p>' +
                        '<br>' +
                        '<div><a href="./carrito.html">Comprar!</a></div>'+
                    '</section>'
        }
    }
    else cards += '<h2 class="msg-error">No se encontraron productos para mostrar</h2>'

    document.querySelector('.section-cards-container').innerHTML = cards 
}

function start() {
    console.warn( document.querySelector('title').innerText )

    representarCardsProductos()
}


// -------------------------------------------
//               Ejecución
// -------------------------------------------
