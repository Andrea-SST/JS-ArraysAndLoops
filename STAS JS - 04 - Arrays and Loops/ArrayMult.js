/* ARRAY OF MULTIPLES

Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
*/

function arrMult(number, lenght) { 
    arr2 = [];
    for(let i = 1; i <= lenght; i++) {  // i es de mi indice, por eso emppieza en 1
        arr2.push(number*i)
    }
    console.log(`${arr2}`)
}

arrMult(2,3) // aquí pongo los numeros que quiera