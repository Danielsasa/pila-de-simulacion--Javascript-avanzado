// simular pilas de ejecución de java 
//definimos un a calse Pila para gestionar una estructura tipo LIFO

class Pila {
    constructor() {
        this.items = []; // inicializamos un array vacio
    }
    // metodo para agregar un elemento a la pila
    push(element) {
        console.log("Elemento agregado: " + element); // mostramos el elemento que se agrega
        this.items.push(element); // agregamos el elemento al final del array
    }
    // metodo para eliminar el ultimo elemento de la pila
    pop() {
        if (this.isEmpty()) {
            console.log("Pila vacia"); // si la pila esta vacia mostramos un mensaje
            return null; 
        }
        console.log("Elemento eliminado: " + this.items[this.items.length - 1]); // mostramos el elemento que se elimina
        return this.items.pop(); // eliminamos el ultimo elemento del array y lo devolvemos
    }
    // metodo para ver el ultimo elemento de la pila sin eliminarlo
    peek() {
        if (this.isEmpty()) {
            console.log("Pila vacia"); // si la pila esta vacia mostramos un mensaje
            return null; 
        }
        console.log("Ultimo elemento: " + this.items[this.items.length - 1]); // mostramos el ultimo elemento
        return this.items[this.items.length - 1]; // devolvemos el ultimo elemento del array
    }

    size() {
        console.log("Tamaño de la pila: " + this.items.length); // mostramos el tamaño de la pila
        return this.items.length; // devolvemos el tamaño del array
    }
    // metodo para ver si la pila esta vacia

    print() {
        if (this.isEmpty()) {
            console.log("Pila vacia"); // si la pila esta vacia mostramos un mensaje
        }
        else {
            console.log("contenido de la pila: ", this.items.join(",")); // mostramos los elementos de la pila
        }
    }

    isEmpty() {
        return this.items.length === 0; // devolvemos true si el array esta vacio
    }
}

// creamos una instancia de la clase Pila
console.log("Creando una pila"); // mostramos un mensaje
//creamos la instancia de la clase Pila
const miPila = new Pila();
//agregamos elementos a la pila
miPila.push("Libro 1"); // agregamos el elemento 1
miPila.push("Libro 2"); // agregamos el elemento 2
miPila.push("Libro 3"); // agregamos el elemento 3
miPila.push("Libro 4"); // agregamos el elemento 4
miPila.push("Libro 5"); // agregamos el elemento 5
//consultamos el elemento que se encuentra en la cima de la pila
miPila.peek(); 
// tamaño de la pila
miPila.size();
//imprimimos el contenido de la pila
miPila.print();
//eliminamos el elemento de la cima de la pila
miPila.pop();
//volvemos a consultar el tope y tamaño de la pila
miPila.peek();
miPila.size();
miPila.print();
//vaciar pila por completo 
while (!miPila.isEmpty()) {
    miPila.pop();
}
console.log("Fin del la simulacion  "); 