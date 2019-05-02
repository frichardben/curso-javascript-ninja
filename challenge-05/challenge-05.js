/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

var myarray = [2, 'undefined', null, { a:1 }, function() {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

function myFunction(arr) {
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?

console.log(myFunction(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
// ?

/*function myFunction2(arr,num){
	var myarray = ['Richard', 4, null, 'undefined'];
	return myarray;
}

console.log(myFunction2()[2]); */ 

function myFunction2(arr, index){
	return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

var array2 = ['Eu',{ a:2 }, function(){}, null, 4];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

console.log(myFunction2(array2));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function book(bookName){
    var allBook = {
        'Estruturas De Dados E Algoritmos Com Javascript - 2ª Edição':{
            quantidadePaginas: 408,
            autor: 'Loiane Groner',
			editora: 'Novatec'
        },
		'JavaScript: O Guia Definitivo': {
			quantidadePaginas: 1080,
			autor: 'David Flanagan',
			editora: 'Bookman'
        },
		'Eloquente Javascript': {
			quantidadePaginas = 488,
			autor: 'Marijn Haverbeke',
			editora: 'No Starch Press'
        }
    }
	return !bookName ? allBooks : allBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

console.log(myBooks());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
