// Clase que implementa una cola circular estática para simular una impresora
class ColaImpresion{
    // Constructor: recibe la capacidad máxima e inicializa el arreglo y los punteros
    constructor (capacidadMaxima ){
        this.capacidadMaxima = capacidadMaxima // Tamaño fijo del buffer circular
        this.memoria = new Array(this.capacidadMaxima) // Arreglo donde se almacenan los documentos
        this.frente = -1 // Índice del primer elemento ( -1 = vacío )
        this.final = -1  // Índice del último elemento ( -1 = vacío )
        this.cantidadActual = 0 // Contador de documentos encolados
    }

    // Verifica si la cola está vacía comparando cantidadActual con 0
    estaVacia(){
        return this.cantidadActual === 0
        }

    // Verifica si la cola está llena comparando cantidadActual con capacidadMaxima
    estaLlena(){
        return this.cantidadActual === this.capacidadMaxima
    }

    // Agrega un documento al final de la cola usando lógica circular (módulo)
    encolar(documento){
        if(this.estaLlena()){
            return console.log ("Impresora llena")
        } if (this.estaVacia()){
            this.frente ++ // Si estaba vacía, movemos frente a 0
        }
        this.final = (this.final + 1) % this.capacidadMaxima // Avance circular
        this.memoria [this.final] = documento // Guardamos el documento en la posición
        this.cantidadActual ++ // Incrementamos el contador
    }

    // Quita el documento del frente de la cola y lo retorna
    desencolar(){
        if (this.estaVacia()){
            return console.log ("No hay documentos a imprimir")
        } 
        let documentoImpreso = this.memoria[this.frente] // Obtenemos el documento del frente
        this.frente = (this.frente + 1) % this.capacidadMaxima // Avance circular del frente
        this.cantidadActual -- // Decrementamos el contador
        if(this.cantidadActual === 0){
            this.frente = -1 // Reiniciamos frente si la cola queda vacía
            this.final = -1  // Reiniciamos final si la cola queda vacía
        
        }
        return documentoImpreso // Retornamos el documento desencolado
    }

    // Método recursivo que desencola e imprime todos los documentos hasta vaciar la cola
    ImprimirRecursividad(){
        if(this.estaVacia()){
            return console.log ("No hay documentos a imprimir")
        } 
        let documentoActual = this.desencolar() // Desencolamos un documento
            console.log(`Imprimiendo documento: ${documentoActual.nombre}`) // Lo mostramos en consola
        this.ImprimirRecursividad() // Llamada recursiva para el siguiente
        }


    }
    


