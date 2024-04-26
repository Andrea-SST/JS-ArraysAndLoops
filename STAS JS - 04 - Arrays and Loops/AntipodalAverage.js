/* ANTIPODAL AVERAGE

Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.

Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/

function antipodalAvg(arr) { 
    
    console.log(`${arr} calculando antipodal`);
       const arr1 = []
       const arr2 = []
       const antipodal_array = []
       let l = arr.length
       
       // DIVIDE ARRAY EN DOS

       if (l % 2 == 0 ){  //si es par:
            for (let i = 0;  i < (l/2); i++) {arr1.push(arr[i])} //primer array
            for (let i = (l/2);  i < l; i++) {arr2.push(arr[i])} //segundo array
       } 
       else{            //si es impar:
            for (let i = 0;  i < (l/2-1); i++) {arr1.push(arr[i])}
           for (let i = Math.round(l/2);  i < l; i++) {arr2.push(arr[i])}
       }

       //Imprime mitades

       console.log(`${arr1} primera mitad`); 
       console.log(`${arr2} segunda mitad`);
       
       //calcula antipodal

       l = arr1.length
       for (let i = 1;  i <= l; i++) {antipodal_array.push((arr1[i-1]+arr2[l-i])/2)} 
       console.log(`${antipodal_array} Antipodal`); //imprime antipodal
   }
   
   antipodalAvg([1,2,3,5,22,6]);