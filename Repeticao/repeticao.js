/*
//Desenha pirâmide de asteriscos

const altura = 5;

for (let linha = 1; linha <= altura; linha++) {
    let asteriscos = "";

    for (let i= 1; i <= linha; i++) {   
        asteriscos += "* ";
    }
    console.log(asteriscos);
 }
*/

/*
//for of: só funciona para array

const frutas = ["Maçã","Banana","Laranja","Uva","Pêra","Melancia"];

console.log(frutas[0])
console.log(frutas.length)

for (const fruta of frutas) {
    console.log(`- ${fruta}`)
}

//const = é cada passada de laço
*/

/*
const numeros = [10, 25, 8, 42, 15, 7];

let soma = 0;
console.log("Somando...")
for (const num of numeros) {
    soma += num //somando todos os números do array
    console.log(soma)
}
console.log("Soma total: ", soma)
*/

/*
//Encontrando o MAIOR número

const notas = [7.5, 9.0, 6.5, 8.8, 10.0, 5.5]

let maior = notas[0];

console.log("Procurando a maior nota...")
for (const nota of notas) {
    console.log(`Maior nota atual: ${maior}`)
    if (nota > maior){
    console.log(`${nota} é maior que ${maior}`)
        maior = nota
    } else {
    console.log(`${nota} não é maior que ${maior}`)
    }
}

console.log(`A maior nota atual é: ${maior}`)
*/

/*
const pessoa = {
    nome: "Geovanna",
    idade: 35,
    cidade: "Santo André",
    profissao: "Professor"
}

console.log(pessoa.nome)
console.log(pessoa["idade"])

*/

/*
const aluno = {
    nome: "Geovanna",
    idade: 35,
    matricula: "00012345",
    curso: "JavaScript",
    nota: 9.5
}

for (const chave in aluno) {
    
    const valor = aluno[chave];
    console.log(`${chave}: ${valor}`)    
    
}
*/

//Estoque de produto

/*const estoque = {
    "Notebook": 15,
    "Mouse": 50,
    "Teclado": 30,
    "Monitor": 8,
    "Webcam": 22
};

console.log("ESTOQUE:\n")

for (const produto in estoque) {
    const quantidade = estoque[produto]

    if (quantidade < 10) {
        console.log(`${produto}: ${quantidade} unidades (ESTOQUE BAIXO!)`)
    } else {
        console.lof(`${produto}: ${quantidade} unidades`)
    }
}*/


const carrinho = [
    {produto: "Camiseta", preco: 49.90, quantidade: 2},
    {produto: "Calca Jeans", preco: 129.90, quantidade: 1},
    {produto: "Tenis", preco: 199.90, quantidade: 1},
];

let total = 0;

for (const item of carrinho) {

    const subtotal = item.preco * item.quantidade;

    total += subtotal

    console.log(`${item.produto} (${item.quantidade}x) - R$ ${subtotal.toFixed(2)}`)
    
}