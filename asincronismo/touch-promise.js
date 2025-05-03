function descargarArchivoCallback(nombreArchivo, callback){
    console.log("iniciando la descarga del archivo: " + nombreArchivo); 
    setTimeout (() => {
        const contenido = ("contenido del archivo" + nombreArchivo);
        callback(null, contenido ); // llamamos al callback con el nombre del archivo descargado
    }, 3000); // simulamos una descarga de 2 segundos
}

descargarArchivoCallback("archivo1.txt", (error, resultado) => {
    if (error) {
        console.log("Error en la descarga: " + error);
    } else {
        console.log("Archivo descargado: " + resultado);
    }
}); // Cerramos correctamente el paréntesis y la llave