// Creamos nuestra cola circular con capacidad para 5 documentos
const miImpresora = new ColaImpresion(5);

// Traemos los botones, el formulario y los textos a JavaScript
const formulario = document.getElementById("formularioDocumento");
const btnDesencolar = document.getElementById("btnDesencolar");
const btnRecursivo = document.getElementById("btnRecursivo");
const consola = document.getElementById("consolaImpresion");
const txtFrente = document.getElementById("txtFrente");
const txtFinal = document.getElementById("txtFinal");



// Función para escribir mensajes en la bitácora negra de la pantalla
function logConsola(mensaje) {
    consola.innerHTML += `<br>>> ${mensaje}`;
    consola.scrollTop = consola.scrollHeight; // Hace scroll automático hacia abajo
}

// Función maestra: Dibuja la memoria estática en los cuadritos
function actualizarPantalla() {
    // Actualizamos los números de los punteros en pantalla
    txtFrente.innerText = miImpresora.frente;
    txtFinal.innerText = miImpresora.final;

    // Primero, "limpiamos" visualmente los 5 slots
    for (let i = 0; i < miImpresora.capacidadMaxima; i++) {
        let slot = document.getElementById(`slot-${i}`);
        slot.innerHTML = `[${i}]<br>Vacío`;
        slot.style.backgroundColor = "transparent";
    }

    // Si hay documentos, calculamos cuáles posiciones colorear
    if (!miImpresora.estaVacia()) {
        let i = miImpresora.frente;
        let contador = 0;
        
        // Recorremos la cantidad actual usando tu lógica circular
        while (contador < miImpresora.cantidadActual) {
            let slot = document.getElementById(`slot-${i}`);
            let doc = miImpresora.memoria[i];
            
            // Pintamos los datos del documento en su casilla
            slot.innerHTML = `[${i}]<br><b>${doc.nombre}</b><br><small>${doc.tipoDocumento}</small>`;
            slot.style.backgroundColor = "#e0f7fa"; // Un color azul claro para ocupado
            
            // Avanzamos al siguiente slot aplicando el módulo
            i = (i + 1) % miImpresora.capacidadMaxima;
            contador++;
        }
    }
}



//Cuando el usuario le da al botón "Agregar a la Cola"
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita que la página parpadee o se recargue

    // Validar primero si hay espacio
    if (miImpresora.estaLlena()) {
        logConsola("ERROR: La impresora está llena. No se puede encolar.");
        return;
    }

    // Extraer los textos que el usuario escribió
    let nom = document.getElementById("nombre").value;
    let aut = document.getElementById("autor").value;
    let tip = document.getElementById("tipo").value;

    // Crear el objeto Documento con tu molde
    let nuevoDoc = new Documento(nom, aut, tip);

    // Encolar y avisar
    miImpresora.encolar(nuevoDoc);
    logConsola(`Documento encolado: ${nuevoDoc.nombre}`);
    
    // Limpiamos las cajas de texto y actualizamos los cuadritos
    formulario.reset();
    actualizarPantalla();
});

//Cuando el usuario le da al botón "Imprimir Siguiente"
btnDesencolar.addEventListener("click", function() {
    if (miImpresora.estaVacia()) {
        logConsola("Aviso: No hay documentos a imprimir.");
        return;
    }

    // Sacamos el documento y lo mostramos
    let docImpreso = miImpresora.desencolar();
    logConsola(`Éxito: Impreso con éxito: ${docImpreso.nombre} (Autor: ${docImpreso.autor})`);
    
    // Refrescamos los cuadritos
    actualizarPantalla();
});

// Cuando el usuario le da al botón "Imprimir Todo"
btnRecursivo.addEventListener("click", function() {
    if (miImpresora.estaVacia()) {
        logConsola("Aviso: La cola ya está vacía.");
        return;
    }
    
    logConsola("Iniciando impresión recursiva...");
    // Llamamos a tu método recursivo
    miImpresora.ImprimirRecursividad();
    
    // Al terminar todas las alertas, actualizamos la pantalla para que quede en blanco
    actualizarPantalla();
    logConsola("Éxito: Impresión recursiva finalizada.");
});