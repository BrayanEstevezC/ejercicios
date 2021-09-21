//Ejercicio 7
function contarVocales(texto){
    return texto.replace(/[^aeiouAEIOUáéíóúÁÉÍÓÚ]/g, "").length;
}