let arr = [1, "e", 2, "o", 3, "i", 8, "a"];

function cuentaLetras(){
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        let letras = 0;
        if(typeof element == "string"){
            letras++;
        }
    }
    return alert("El total de letras es de " + letras);
}


console.log(cuentaLetras(arr));