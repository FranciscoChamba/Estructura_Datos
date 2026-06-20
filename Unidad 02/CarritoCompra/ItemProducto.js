class ItemProducto{
    constructor(producto, cantidad = 1){
        this.producto = producto
        this.cantidad = cantidad
    }
    obtenerSubtotal(){
        return this.producto.precio * this.cantidad
    }
}
