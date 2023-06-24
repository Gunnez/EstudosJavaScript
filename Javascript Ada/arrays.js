// ARRAYS - MÉTODOS DE ARRAYS

let arr1 = [30,12,43,34,29]

//fatiamento: slice

console.log(arr1.slice(0,2)) //o numero final não esta incluido

//Adicionando elementos: push | unshift

arr1.push(8)        //Adiciona no final
arr1.unshift(2)     //Adiciona no inicio do array
console.log(arr1)

//Remover elementos: pop | shift

arr1.pop()      // remove o ultimo elemento
arr1.shift()    // remove o primeiro elemento
console.log(arr1)