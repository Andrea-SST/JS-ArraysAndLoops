/* POSITIVE DOMINANCE IN ARRAY
 
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/

function positiveDom(arr) { //un array es un vector
    
    let positivos = 0;
    let negativos = 0; 

    arr.forEach(function(element) {
        if(element > 0) { // contador para numeros positivos
            positivos++;
        }
        else if (element < 0) { // contador para numeros negativos
            negativos++;
        }
    })
    console.log(`${positivos} positivos`);
    console.log(`${negativos} negativos`);
    
    if(positivos < negativos) {
        return false;
    }
    else if (positivos > negativos) {
        return true;
    }
    else {
        return false;
    }

}

positiveDom([-1, -3, -5, 4, 6767])

