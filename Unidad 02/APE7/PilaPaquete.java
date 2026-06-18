/**
 * @author FrancisEngine(Francisco Chamba)
 */

public class PilaPaquete {
    private Paquete [] stack;
    private int top;

    public PilaPaquete(int capacidad) {
        this.stack = new Paquete[capacidad];
        this.top = -1;// Por que empezamos en -1
    }
    public void push(Paquete p) {
        if(top == stack.length - 1){
            System.out.println("Pila llena");
        }
        stack[++top] = p;

    }
    public Paquete pop() {
        if(top == -1){
            System.out.println("Pila vacia");
        }
        return null;
    }
}
