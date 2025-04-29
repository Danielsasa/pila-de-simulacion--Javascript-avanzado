// simular pilas de ejecución de java 
//definimos un a calse Pila para gestionar una estructura tipo FIFO
// First in First Out (FIFO)

class Cola {
    constructor() {
        this.items = []; // inicializamos un array vacio
    }
    //metodo para agregar un elemento a la cola
    enqueue(element) {
        console.log("Elemento agregado: " + element); // mostramos el elemento que se agrega
        this.items.push(element); // agregamos el elemento al final del array
    }
    //metodo para eliminar el primer elemento de la cola
    dequeue() {
        if (this.isEmpty()) {
            console.log("Cola vacia"); // si la cola esta vacia mostramos un mensaje
            return null; 
        }
        console.log("Elemento eliminado: " + this.items[0]); // mostramos el elemento que se elimina
        return this.items.shift(); // eliminamos el primer elemento del array y lo devolvemos
    }
    //metodo para ver el primer elemento de la cola sin eliminarlo
    peek() {
        if (this.isEmpty()) {
            console.log("Cola vacia"); // si la cola esta vacia mostramos un mensaje
            return null; 
        }
        console.log("Primer elemento: " + this.items[0]); // mostramos el primer elemento
        return this.items[0]; // devolvemos el primer elemento del array
    }
    //metodo para ver el tamaño de la cola
    size() {
        console.log("Tamaño de la cola: " + this.items.length); // mostramos el tamaño de la cola
        return this.items.length; // devolvemos el tamaño del array
    }
    //metodo para imprimir los elementos de la cola
    print() {
        if (this.isEmpty()) {
            console.log("Cola vacia"); // si la cola esta vacia mostramos un mensaje
        }
        else {
            console.log("contenido de la cola: ", this.items.join("<-")); // mostramos los elementos de la cola
        }
    }
       //metodo para ver si la cola esta vacia
       isEmpty() {
        return this.items.length === 0; // devolvemos true si el array esta vacio
    }

    front() {
        if (this.isEmpty()) {
            console.log("Cola vacia"); // si la cola esta vacia mostramos un mensaje
            return null; 
        }
        console.log("Primer elemento: " + this.items[0]); // mostramos el primer elemento
        return this.items[0]; // devolvemos el primer elemento del array
    }
    back() {
        if (this.isEmpty()) {
            console.log("Cola vacia"); // si la cola esta vacia mostramos un mensaje
            return null; 
        }
        console.log("Ultimo elemento: " + this.items[this.items.length - 1]); // mostramos el ultimo elemento
        return this.items[this.items.length - 1]; // devolvemos el ultimo elemento del array
    }

}

// creamos una instancia de la clase Cola
// simulacion de una cola de ejecucion 

console.log("Creando una cola"); // mostramos un mensaje
const miColaEjecucion = new Cola(); // creamos la instancia de la clase Cola
// agregamos elementos a la cola
miColaEjecucion.enqueue("Proceso 1"); // agregamos el elemento 1
miColaEjecucion.enqueue("Proceso 2"); // agregamos el elemento 2
miColaEjecucion.enqueue("Proceso 3"); // agregamos el elemento 3
miColaEjecucion.enqueue("Proceso 4"); // agregamos el elemento 4
miColaEjecucion.enqueue("Proceso 5"); // agregamos el elemento 5    

miColaEjecucion.front(); // consultamos el primer elemento de la cola
miColaEjecucion.back(); // consultamos el ultimo elemento de la cola
miColaEjecucion.print(); // imprimimos el contenido de la cola
miColaEjecucion.dequeue(); // consultamos el tamaño de la cola
miColaEjecucion.front(); // consultamos el primer elemento de la cola
miColaEjecucion.back(); // consultamos el ultimo elemento de
miColaEjecucion.print(); // imprimimos el contenido de la cola
miColaEjecucion.size(); // consultamos el tamaño de la cola

console.log("Fin de la simulacion"); // mostramos un mensaje