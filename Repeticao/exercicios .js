// Todos os exercicios

//Carrinho de compras

/*const carrinho = [
  { id: 1, nome: "Notebook", preco: 3000, quantidade: 1, promocao: true },
  { id: 2, nome: "Mouse", preco: 100, quantidade: 2, promocao: false },
  { id: 3, nome: "Teclado", preco: 200, quantidade: 1, promocao: true },
  { id: 4, nome: "Monitor", preco: 1200, quantidade: 1, promocao: false }
];

// 1. Valor total do carrinho
const total = carrinho.reduce((soma, produto) => {
  return soma + produto.preco * produto.quantidade;
}, 0);

console.log("Valor total:", total);

// 2. Nomes dos produtos em promoção
const produtosPromocao = carrinho
  .filter(produto => produto.promocao)
  .map(produto => produto.nome);

console.log("Produtos em promoção:", produtosPromocao);

// 3. Encontrar o produto com id = 3
const produtoId3 = carrinho.find(produto => produto.id === 3);

console.log("Produto com ID 3:", produtoId3);

// 4. Novo array com o subtotal de cada produto
const subtotais = carrinho.map(produto => ({
  nome: produto.nome,
  subtotal: produto.preco * produto.quantidade
}));

console.log("Subtotais:", subtotais);*/



// Exercicios de Repeticao

//Contagem de 1 a 10 

/*for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2- Tabuada de um número 

let numero = Number(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {
    console.log(${numero} x ${i} = ${numero * i});
}



//3- Soma dos primeiros N números 


let numero = Number(prompt("Digite um número inteiro positivo:"));
let soma = 0;

for (let i = 1; i <= numero; i++) {
    soma += i;
}

console.log("A soma é:", soma);


//4- números pares de 1 a 50 

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}


//Exercicios Filter,map,find,reduce



//1- Notas maiores ou iguais a 7 

const notas = [4, 7, 9, 3, 10, 5];

const resultado = notas.filter(nota => nota >= 7);

console.log(resultado);


//2- Palavras com mais de 4 Letras 


const palavras = ["sol", "mar", "computador", "lua", "código"];

const resultado = palavras.filter(palavra => palavra.length > 4);

console.log(resultado);



//3- Animais que começam com C 

const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"];

const resultado = animais.filter(animal => animal.startsWith("c"));

console.log(resultado);


//Find

//1- Primeiro filme começa com B 

const filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];

const resultado = filmes.find(filme => filme.startsWith("B"));

console.log(resultado);


//2- Primeiro número ímpar 

const numeros = [2, 4, 6, 9, 12, 15];

const resultado = numeros.find(numero => numero % 2 !== 0);

console.log(resultado);


//3- Primeiro aluno com nota maior ou igual a 7 

const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Beatriz", nota: 9 }
];

const resultado = alunos.find(aluno => aluno.nota >= 7);

console.log(resultado);


// Map


//1- Celsius para Fahrenheit

const temperaturas = [20, 25, 30, 15];

const fahrenheit = temperaturas.map(c => c * 1.8 + 32);

console.log(fahrenheit);


//2- Produtos em maiúsculo com prefixo

const produtos = ["camisa", "calça", "sapato"];

const resultado = produtos.map(produto => Produto: ${produto.toUpperCase()});

console.log(resultado);


//3- Números elevados ao quadrado

const numeros = [1, 2, 3, 4];

const quadrados = numeros.map(numero => numero ** 2);

console.log(quadrados);


// Reduce

//1- Calcular o total

const valores = [100, 200, 50, 150];

const total = valores.reduce((soma, valor) => soma + valor, 0);

console.log(total);


//2- Juntar tudo em uma frase

const frase = palavras.reduce((resultado, palavra) => resultado + " " + palavra);

console.log(frase);




//3- Calcular a média

const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((total, numero) => total + numero, 0);

const media = soma / numeros.length;

console.log(media);




// Desafio Misturado


//1- Dados do array

const carrinho = [
    { produto: "Notebook", preco: 2500 },
    { produto: "Mouse", preco: 100 },
    { produto: "Teclado", preco: 200 }
];

// MAP - criar lista de produtos
const listaProdutos = carrinho.map(item => {
    return Produto: ${item.produto} - R$ ${item.preco};
});

// REDUCE - calcular o valor total
const total = carrinho.reduce((soma, item) => {
    return soma + item.preco;
}, 0);

// FIND - encontrar o Mouse
const mouse = carrinho.find(item => item.produto === "Mouse");

console.log("Lista de produtos:");
console.log(listaProdutos);

console.log("Valor total:");
console.log(total);

console.log("Produto encontrado:");
console.log(mouse);*/



