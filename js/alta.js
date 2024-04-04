// -------------------------------------------
//           Variables Globales
// -------------------------------------------


// -------------------------------------------
//           Funciones Globales
// -------------------------------------------
function agregar(e) {
    e.preventDefault()

    console.log('agregar()')

    // referencias a elementos de entrada por sus IDs
    var refNombre = document.getElementById('nombre')
    var refCodigo = document.getElementById('codigo')
    var refPrecio = document.getElementById('precio')
    var refStock = document.getElementById('stock')
    var refMarca = document.getElementById('marca')
    var refCategoria = document.getElementById('categoria')
    var refDescripcionLarga = document.getElementById('descripcionLarga')
    var refDescripcionCorta = document.getElementById('descripcionCorta')
    var refEdadDesde = document.getElementById('edadDesde')
    var refEdadHasta = document.getElementById('edadHasta')
    var refFoto = document.getElementById('foto')
    var refEnvio = document.getElementById('envio')

    var nombre = refNombre.value
    var codigo = refCodigo.value
    var precio = +refPrecio.value
    var stock = +refStock.value
    var marca = refMarca.value
    var categoria = refCategoria.value
    var descripcionCorta = refDescripcionCorta.value
    var descripcionLarga = refDescripcionLarga.value
    var edadDesde = refEdadDesde.value
    var edadHasta = refEdadHasta.value
    var foto = refFoto.value
    var envio = refEnvio.checked

    var producto = {
        nombre: nombre,
        codigo:codigo,
        precio: precio,
        stock: stock,
        marca: marca,
        categoria: categoria,
        descripcionCorta: descripcionCorta,
        descripcionLarga: descripcionLarga,
        edadDesde: edadDesde,
        edadHasta: edadHasta,
        foto: foto,
        envio: envio,
    }

    console.log(producto)
    productos.push(producto)

    representarTablaProductos()

    refNombre.value = ''
    refCodigo.value = ''
    refPrecio.value = ''
    refStock.value = ''
    refMarca.value = ''
    refCategoria.value = ''
    refDescripcionCorta.value = ''
    refDescripcionLarga.value = ''
    refEdadDesde.value = ''
    refEdadHasta.value = ''
    refFoto.value = ''
    refEnvio.checked = false
}

function representarTablaProductos() {
    var filasTabla

    if(productos.length) {
        filasTabla =    '<tr>' +
                            '<th id="tablaTitulo" colspan="13">Productos disponibles</th>'+
                        '<tr>' +
                            '<th>nombre</th>' +
                            '<th>código</th>' +
                            '<th>precio</th>' +
                            '<th>stock</th>' +
                            '<th>marca</th>' +
                            '<th>categoría</th>' +
                            '<th>descripción corta</th>' +
                            '<th>descripción larga</th>' +
                            '<th>Edad desde</th>' +
                            '<th>Edad hasta</th>' +
                            '<th>foto</th>' +
                            '<th>envío</th>' +
                        '</tr>'

        for(var i=0; i<productos.length; i++) {
            filasTabla += '<tr>' +
                            '<td>'+ productos[i].nombre + '</td>' +
                            '<td>'+ productos[i].codigo + '</td>' +
                            '<td>'+ productos[i].precio + '</td>' +
                            '<td>'+ productos[i].stock + '</td>' +
                            '<td>'+ productos[i].marca + '</td>' +
                            '<td>'+ productos[i].categoria + '</td>' +
                            '<td>'+ productos[i].descripcionCorta + '</td>' +
                            '<td>'+ productos[i].descripcionLarga + '</td>' +
                            '<td>'+ productos[i].edadDesde + '</td>' +
                            '<td>'+ productos[i].edadHasta + '</td>' +
                            //'<td>'+ productos[i].foto + '</td>' +
                            '<td><img width="75" src="'+ productos[i].foto + '" alt="foto de '+ productos[i].nombre +'"></td>' +
                            '<td>'+ (productos[i].envio? 'Si':'No') + '</td>' +
                        '</tr>'
        }
    }
    else filasTabla = '<h2 class="msg-error">No se encontraron productos para mostrar</h2>'

    document.querySelector('table').innerHTML = filasTabla                    
}

function start() {
    console.warn( document.querySelector('title').innerText )

    var refForm = document.querySelector('main form')
    refForm.onsubmit = agregar

    representarTablaProductos()
}


// -------------------------------------------
//               Ejecución
// -------------------------------------------
