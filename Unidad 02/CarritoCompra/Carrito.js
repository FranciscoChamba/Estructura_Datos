class Carrito {

    constructor() {
        this.items = []
    }

    agregarProducto(producto, cantidad = 1) {
        const nuevoItem = new ItemProducto(producto, cantidad)
        this.items.push(nuevoItem)
        
        console.log(` Se apiló "${producto.nombre}" en el carrito.`)
    }

    deshacerUltimo() {
        if (this.items.length === 0) {
            console.log("La pila está vacía. No hay productos para remover.")
            return null
        }

        const itemEliminado = this.items.pop()
        console.log(` Se removió lo último que entró: "${itemEliminado.producto.nombre}"`)
        return itemEliminado
    }

    calcularTotal() {
        return this.items.reduce((total, item) => total + item.obtenerSubtotal(), 0)
    }

    mostrarCarrito() {
        if (this.items.length === 0) {
            console.log("\nEl carrito está vacío.\n")
            return
        }

        console.log("\n--- MI CARRITO ---")
       
        for (let i = this.items.length - 1; i >= 0; i--) {
            const item = this.items[i]
            const marcaTope = (i === this.items.length - 1) 
            console.log(`[Posición ${i}] ${item.cantidad}x ${item.producto.nombre} - Subtotal: $${item.obtenerSubtotal()}${marcaTope}`)
        }
        console.log(`TOTAL ACTUAL: $${this.calcularTotal()}`)
    }
}