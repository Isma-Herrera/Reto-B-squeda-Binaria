var cantidades = [Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1), Math.floor((Math.random() * 99) + 1)];
alert(cantidades;

function numeroMayor(){
    let max = 0;
    for (let index = 0; index < cantidades.length; index++) {
        const element = cantidades[index];
        if(max < cantidades[index]){
            max = cantidades[index];
        }
    }
    return alert("El número más grande en el arreglo es: " + max);
}

numeroMayor(cantidades);