// Estructura del Nodo del Índice
class NodoBusqueda {
    constructor(keyword, urlCache) {
        this.keyword = keyword;       // Llave de búsqueda (ej."estructura de datos")

        this.urlCache = urlCache;     // Valor (ej."es.wikipedia.org/...")
        this.visitas = 1;             // Frecuencia de búsqueda
        this.izquierdo = null;
        this.derecho = null;
    }
}
// Implementación del TDA Árbol Binario de Búsqueda
class MotorIndexacionBST {
    constructor() {
        this.raiz = null;
    }
    // Indexar nueva consulta en el historial
    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this._insertarNodo(this.raiz, nuevoNodo);
        }
        let actual = this.raiz;
        while (true) {
            if (keyword === actual.keyword) {
                actual.visitas++;
                return;
            } else if (keyword < actual.keyword) {
                if (actual.izquierdo === null) {
                    actual.izquierdo = nuevoNodo;
                    return
                }
            } else {
                if (actual.derecho === null) {
                    actual.derecho = nuevoNodo;
                    return
                }
            }

        }
    }
    _insertarNodo(nodoActual, nuevoNodo) {
        // TAREA DEL ESTUDIANTE: Implementar comparación alfabética (localeCompare).
        // Si el 'keyword' ya existe, incremente el contador 'visitas' en 1.
    }
    // Buscar una palabra clave en el historial (O(log n)esperado)
    buscar(keyword) {
        // TAREA DEL ESTUDIANTE: Implementar lógica iterativa o recursiva.
        let actual = this.raiz;
    while (actual !== null) {
        const cmp = keyword.localeCompare(actual.keyword);
        if (cmp === 0) return actual;
        actual = cmp < 0 ? actual.izquierdo : actual.derecho;
    }
        return null;
    }
    // Recorrido Inorden: Exportar el historial ordenado
    exportarHistorial(nodo = this.raiz) {
        // TAREA DEL ESTUDIANTE: Implementar recorrido Inorden.
    }
}
