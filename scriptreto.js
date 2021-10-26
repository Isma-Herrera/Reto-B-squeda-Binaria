var cantidades = [Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1)];

console.log(cantidades);

function numeroRepetido(){
    for (let index = 0; index < cantidades.length; index++) {
        const element = cantidades[index];
        let numero_repetido = 0;
        do {
            numero_repetido++;
        } while (element == element);
    }
    return alert("El número más repetido fue: " + numero_repetido);
}

numeroRepetido(cantidades);