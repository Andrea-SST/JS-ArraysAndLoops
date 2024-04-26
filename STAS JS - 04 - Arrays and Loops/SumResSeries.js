/* SUM OF RESISTORS IN SERIES
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*/

// Preparar constantes 
// Declarar funcion par aceptar un arr por parametro
// Loopp por el arr
// Tomar el valor abs de cada elemento
// Sumar todos los valores absolutos

// Estoy recibiendo un vector, y quiero que me de de resultado el valor absoluto 
const res1 = [-1, 5, 6, 3];
const res2 = [14, 5.5, 6];
const res3 = [8, 15, 100];

function sumResistance(arr) { //un array es un vector
    
    const arr2 = []; // esta en blanco porque hace un reserva en la memoria
    let res = 0; // res de resultado
    
    arr.forEach((e) => arr2.push(Math.abs(e))); // Para cada elemento del array (aqui esta sacando la longitud del array), e es una variable, o sea, un elemento x (en este caso son los valores de mi res 1,2,3). me regresa un array de valores absolutos, por eso el abs
    arr2.forEach((e) => (res = res + e));
    console.log(`${res} ohms`);
}

function sumResistance2 (arr) {
    let res = 0;
    for (let i = 0;  i < arr.length; i++) {
        res += Math.abs(arr[i]);
    }
    return res;
}

sumResistance(res3);
const try2 = sumResistance2(res1);
console.log (`${try2}`);