import java.util.ArrayList;
import java.util.Random;

/**
 * @author FrancisEngine(Francisco Chamba)
 */

public class CentroDistribucion {
    private ArrayList<Paquete> inventario;

    public CentroDistribucion() {
        this.inventario = new ArrayList<>();
    }

    public void recibirCajaCamion(Paquete p) {
        this.inventario.add(p);
    }

    public Paquete despacharACliente() {
        if (!this.inventario.isEmpty()) {
            return this.inventario.remove(this.inventario.size() - 1);
        }
        return null;
    }



    public void enviarPaquete(Paquete nuevoPaquete) {
        if (nuevoPaquete != null) {
            inventario.add(nuevoPaquete);
        }
    }
    public static int buscarLineal(Paquete[] lista, int id) {
for (int i = 0; i < lista.length; i++) {
if (lista[i].getId() == id) return i;

}
return -1;
}
public static int buscarBinario(Paquete[] lista, int id) {
int bajo = 0, alto = lista.length - 1;
while (bajo <= alto) {
int medio = bajo + (alto - bajo) / 2;
if (lista[medio].getId() == id) return medio;
if (lista[medio].getId() < id) bajo = medio + 1;
else alto = medio - 1;
}
return -1;
}



//    public void ordenarRutaBurbuja(){
//        int n = this.inventario.size();
//        for(int i = 0; i < n-1; i++){
//            for(int j = 0; j < n-i-1; j++){
//                if (this.inventario.get(j).getCodigoPostal() > this.inventario.get(j+1).getCodigoPostal()){
//                    Paquete aux = this.inventario.get(j);
//                    this.inventario.set(j, this.inventario.get(j+1));
//                    this.inventario.set(j+1, aux);
//                }
//            }
//        }
//    }

    /**
     * Algoritmo de optimizacion 1: QuickSort
     */
    public void ordenarRutaQuickSort() {
        if (this.inventario != null && this.inventario.size() > 1) {
            quickSort3Vias(0, this.inventario.size() - 1);
        }

    }

    // Algoritmo de 3 vías (Dijkstra)
    private void quickSort3Vias(int inicio, int fin) {
        if (inicio >= fin) return;

        int lt = inicio;
        int gt = fin;
        // Tomamos el código postal del primer paquete como pivote
        int pivote = this.inventario.get(inicio).getCodigoPostal();
        int i = inicio + 1;

        while (i <= gt) {
            int cpActual = this.inventario.get(i).getCodigoPostal();
            if (cpActual < pivote) {
                intercambiar(lt, i);
                lt++;
                i++;
            } else if (cpActual > pivote) {
                intercambiar(i, gt);
                gt--;
            } else {
                i++; // Si es igual, solo avanzamos
            }
        }

        // Ahora los elementos iguales al pivote están en su lugar correcto (entre lt y gt)
        // Solo ordenamos recursivamente lo que quedó a la izquierda y a la derecha
        quickSort3Vias(inicio, lt - 1);
        quickSort3Vias(gt + 1, fin);
    }

    // Metodo auxiliar para intercambiar los paquetes de posición
    private void intercambiar(int i, int j) {
        Paquete aux = this.inventario.get(i);
        this.inventario.set(i, this.inventario.get(j));
        this.inventario.set(j, aux);
    }

    /**
     * Algoritmo de optimizacion 2: MergeSort
     */
//    public void ordenarRutaMergeSort() {
//        if (this.inventario != null && this.inventario.size() > 1) {
//            mergeSort(0, this.inventario.size() - 1);
//        }
//    }
//
//    // Metodo recursivo que divide la lista por la mitad
//    private void mergeSort(int inicio, int fin) {
//        if (inicio < fin) {
//            // Encuentra el punto medio
//            int medio = inicio + (fin - inicio) / 2;
//
//            // Ordena recursivamente la primera y segunda mitad
//            mergeSort(inicio, medio);
//            mergeSort(medio + 1, fin);
//
//            // Mezcla las dos mitades ordenadas
//            merge(inicio, medio, fin);
//        }
//    }
//
//    // Metodo que mezcla las dos mitades ordenando los códigos postales
//    private void merge(int inicio, int medio, int fin) {
//        // Encuentra los tamaños de los dos subarreglos a unir
//        int n1 = medio - inicio + 1;
//        int n2 = fin - medio;
//
//        // Crea ArrayLists temporales para las mitades izquierda y derecha
//        ArrayList<Paquete> izquierda = new ArrayList<>(n1);
//        ArrayList<Paquete> derecha = new ArrayList<>(n2);
//
//        // Copia los datos a los arreglos temporales
//        for (int i = 0; i < n1; ++i) {
//            izquierda.add(this.inventario.get(inicio + i));
//        }
//        for (int j = 0; j < n2; ++j) {
//            derecha.add(this.inventario.get(medio + 1 + j));
//        }
//
//        // Índices iniciales de los subarreglos
//        int i = 0, j = 0;
//
//        // Índice inicial de la lista fusionada original
//        int k = inicio;
//
//        // Compara y mezcla los elementos en orden
//        while (i < n1 && j < n2) {
//            if (izquierda.get(i).getCodigoPostal() <= derecha.get(j).getCodigoPostal()) {
//                this.inventario.set(k, izquierda.get(i));
//                i++;
//            } else {
//                this.inventario.set(k, derecha.get(j));
//                j++;
//            }
//            k++;
//        }
//
//        // Si quedaron elementos en la mitad izquierda, cópialos
//        while (i < n1) {
//            this.inventario.set(k, izquierda.get(i));
//            i++;
//            k++;
//        }
//
//        // Si quedaron elementos en la mitad derecha, cópialos
//        while (j < n2) {
//            this.inventario.set(k, derecha.get(j));
//            j++;
//            k++;
//        }
//    }
    //TODO: Cual es el algortimo de optimizacion para 50000,75000,100000 de paquetes, optimizacion inicio,fin,envio

    public static void main(String[] args) {
        CentroDistribucion c = new CentroDistribucion();
        Random r = new Random(42);

        System.out.println("-----------------------------------------------------------------------------");

        System.out.println("Generar una semilla de 1000000 paquetes con codigos postales para el almacen...");
        for (int i = 0; i < 1_000_000_000; i++) {
            int cp = r.nextInt(50) + 110101;
            c.recibirCajaCamion(new Paquete(i, cp));
        }
        System.out.println("Ordenar los paquetes por codigo postal usando el metodos de ordenacion mergeSort...");
        long start = System.currentTimeMillis();
        //c.ordenarRutaBurbuja();
        c.ordenarRutaQuickSort();
        //c.ordenarRutaMergeSort();
        long stop = System.currentTimeMillis();

        double time = (stop - start) / 1000.0;
        System.out.println("Tiempo de ordenacion: " + time + " segundos");

        System.out.println("Despacha los paquetes a los clientes...");
        Paquete despachado = c.despacharACliente();
        if (despachado != null) {
            System.out.println("Paquetes entregados: " + despachado.getId());
        }

//        System.out.println("-----------------------------------------------------------------------------");
//
//        System.out.println("Generar una semilla de 70000 paquetes con codigos postales para el almacen...");
//        for(int i = 0; i < 70000; i++){
//            int cp = r.nextInt(50)+110101;
//            c.recibirCajaCamion(new Paquete(i, cp));
//        }
//        System.out.println("Ordenar los paquetes por codigo postal usando el metodos de ordenacion mergeSort...");
//        long inicio = System.currentTimeMillis();
//        //c.ordenarRutaBurbuja();
//        //c.ordenarRutaQuickSort();
//        c.ordenarRutaMergeSort();
//        long fin = System.currentTimeMillis();
//
//        double tiempo = (fin-inicio)/ 1000.0;
//        System.out.println("Tiempo de ordenacion: " + tiempo + " segundos");
//
//        System.out.println("Despacha los paquetes a los clientes...");
//        Paquete des = c.despacharACliente();
//        if(despachado != null){
//            System.out.println("Paquetes entregados: " + des.getId());
//        }
//
//        System.out.println("-----------------------------------------------------------------------------");
//
//        System.out.println("Generar una semilla de 1000000 paquetes con codigos postales para el almacen...");
//        for(int i = 0; i < 1000000; i++){
//            int cp = r.nextInt(50)+110101;
//            c.recibirCajaCamion(new Paquete(i, cp));
//        }
//
//        System.out.println("Ordenar los paquetes por codigo postal usando el metodos de ordenacion mergeSort...");
//        long comienzo = System.currentTimeMillis();
//        //c.ordenarRutaBurbuja();
//        //c.ordenarRutaQuickSort();
//        c.ordenarRutaMergeSort();
//        long parar = System.currentTimeMillis();
//
//        double tiem = (parar-comienzo)/ 1000.0;
//        System.out.println("Tiempo de ordenacion: " + tiem + " segundos");
//
//        System.out.println("Despacha los paquetes a los clientes...");
//        Paquete despacha = c.despacharACliente();
//        if(despachado != null){
//            System.out.println("Paquetes entregados: " + despacha.getId());
//        }
//    }

    }



}
