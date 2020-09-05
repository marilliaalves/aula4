// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"

const numeros = ["banana", "gatinho", "brocólis"]
function indiceElemento(arr){
for (let i = 0; i < arr.length; i++){
    console.log(`índice: ${i}, elemento: ${numeros[i]}`)
}
}
indiceElemento(numeros)


// 2) Crie/ uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33


 const inteiros = [2, 3, 1]
function somarInteiros(arr) {
    soma = 0
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }
    console.log(soma)
}

somarInteiros(inteiros)


// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

function maiorqueCinco(arr){
    const maioresNum = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5 ) {
            maioresNum.push(arr[i])
        }
    }
    return maioresNum
}
console.log (maiorqueCinco([2, 4, 10, 35, 40, 50]))


// OBJ

// 1) Crie uma função que receba 3 parâmetros: o nome de um livro, a quantidade de páginas e a autoria. 
// Retorne um objeto no formato: {titulo: "nome do livro", paginas: "número de páginas", autoria: "nome da pessoa"}

// Exemplo: 
// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles') 

// retorna o objeto:
// {
//   titulo: 'Antes do Baile Verde', 
//   paginas: 234,
//   autoria: 'Lygia Fagundes Telles'
// }

function objLivro(nomeLivro, paginaLivro, autoriaLivro){
    return  ({
        titulo: nomeLivro,
        paginas: paginaLivro,
        autoria: autoriaLivro
    })
}
console.log(objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))

// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles') 

// 2) Aproveite a função acima em outra função, que deve retornar a seguinte frase: "O livro XXXX foi escrito por XXX e 
// tem XXX páginas". Você deve utilizar a função que já está pronta, e não reescrever a lógica dela dentro dessa nova 
// função.

function objLivro(nomeLivro, paginaLivro, autoriaLivro){
    const obj = {
        nomeLivro,
        paginaLivro,
        autoriaLivro
    }
     return `O livro ${obj.nomeLivro} foi escrito por ${obj.autoriaLivro} e tem ${obj.paginaLivro} páginas`
}
 console.log(objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))

