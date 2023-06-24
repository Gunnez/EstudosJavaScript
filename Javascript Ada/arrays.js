// ARRAYS - MÉTODOS DE ARRAYS

let arr1 = [30,12,43,34,29]
let arr2 = [50]

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

// concatenando arrays: concat

console.log(arr1.concat(arr2)) // junta dois arrays colocando o segundo no final do primeiro

//busacando elementos: IndexOf | lastIndexOf

console.log(arr1.indexOf(34))   // mostra o indice do numero buscado, caso não exista retorna -1
                                //lastIndexOf mostra o indice do numero buscado, porem faz a busca do final para o inicio
//Descobrindo a existencia de um elemento: includes
console.log(arr1.includes(12)) //retorna true se existe e false se não existe

//invertendo arrays: reverse


