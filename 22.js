/* 22.-  Introducir  una  frase  por  teclado.  Imprimirla  cinco  veces  en
    filas  consecutivas,  pero  cada impresión ir desplazada cuatro columnas
    hacia la derecha.*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese una frase: ', line => {
    for(let i = 0 ; i < 5 ; i++){
        console.log(line);
        line = '    ' + line;
    }
    readline.close();
});
