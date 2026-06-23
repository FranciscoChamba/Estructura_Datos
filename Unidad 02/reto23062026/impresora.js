// Definición de la estructura de la Cola
class ColaImpresion {
  constructor() {
    this.documentos = [];
  }

  // Añadir un documento a la cola 
  agregarDocumento(nombreDocumento) {
    this.documentos.push(nombreDocumento);
    console.log(`En cola: "${nombreDocumento}" listo para imprimir.`);
  }

  // Procesar e imprimir el primer documento (Dequeue)
  imprimirSiguiente() {
    if (this.estaVacia()) {
      console.log(" La cola está vacía. No hay documentos para imprimir.");
      return null;
    }
    const proximo = this.documentos.shift();
    console.log(`Imprimiendo: "${proximo}"... ¡Hecho!`);
    return proximo;
  }

  // Ver qué documento sigue sin sacarlo de la cola (Peek)
  verSiguiente() {
    return this.estaVacia() ? "Ninguno" : this.documentos[0];
  }

  // Verificar si no hay trabajos pendientes
  estaVacia() {
    return this.documentos.length === 0;
  }

  // Mostrar el estado actual de la cola
  mostrarCola() {
    console.log(`Trabajos en espera (${this.documentos.length}): [${this.documentos.join(', ')}]`);
  }
}



//  Ejecución de la simulación
const miImpresora = new ColaImpresion();

// Usuarios envían documentos al mismo tiempo
miImpresora.agregarDocumento("Reporte_Financiero.pdf");
miImpresora.agregarDocumento("Foto_Perfil.png");
miImpresora.agregarDocumento("Tesis_Final_V2.docx");

// Revisar el estado de la impresora
miImpresora.mostrarCola();
console.log(`Próximo en la fila: ${miImpresora.verSiguiente()}`);

// La impresora procesa los trabajos en orden de llegada
miImpresora.imprimirSiguiente(); 
miImpresora.imprimirSiguiente(); 

// Estado final
miImpresora.mostrarCola();