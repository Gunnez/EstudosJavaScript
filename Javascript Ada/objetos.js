//OBJETOS

// Como criar um objeto no JavaScript

let pessoa = {
    nome: 'Gustavo',
    idade: 23,
}

console.log(pessoa)
// Como adicinoar um par chave-valor

pessoa.altura = 1.76

// Como remover um par chave-valor

delete pessoa.altura

// Como percorrer

for(chave in pessoa){
    console.log(chave)
}