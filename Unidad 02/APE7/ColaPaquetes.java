/**
 * @author FrancisEngine(Francisco Chamba)
 */

public class ColaPaquetes {
private Paquete[] queue;
private int frente, fin, total;

public ColaPaquetes(int capacidad) {
    this.queue = new Paquete[capacidad];
    this.frente = 0;
    this.fin = 0;
    this.total = 0;
}

public void enqueue(Paquete p) {
    //Todo: Construir la logica mediante el uso del operador modulo (%)
    if (total == queue.length) {
        System.out.println("Cola llena");
        return;
    }
    queue[fin] = p;
    fin = (fin + 1) % queue.length;
    total++;
}
public Paquete dequeue() {
    // Implementar logica FIFO
    if(total == 0){
        System.out.println("Cola vacia");
        return null;
    }
    Paquete p = queue[frente];
    frente = (frente + 1) % queue.length;
    total--;
    return p;
}

}
