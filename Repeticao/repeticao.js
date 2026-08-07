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


/*const carrinho = [
    {produto: "Camiseta", preco: 49.90, quantidade: 2},
    {produto: "Calca Jeans", preco: 129.90, quantidade: 1},
    {produto: "Tenis", preco: 199.90, quantidade: 1},
];

let total = 0;

for (const item of carrinho) {

    const subtotal = item.preco * item.quantidade;

    total += subtotal

    console.log(`${item.produto} (${item.quantidade}x) - R$ ${subtotal.toFixed(2)}`)
    
}*/





/*const numeros = [5, 12, 8, 3, 19, 7, 25];

const procurado = 19;

for (const num of numeros) {

    if (num === procurado) {

        console.log("Encontrado");

        break;
    }
}

console.log("Loop terminou!");*/




// Senha com limite de 3 tentativas

/*const senhaCorreta = "abc123";

const maxTentativas = 3;

for (let tentativas = 1; tentativas < maxTentativas; tentativas++) {

    const senha = prompt(`Tentativa ${tentativa}/${maxTentativas} - Digite a senha:`);

    if (senha === senhaCorreta) {

        console.log("Acesso Liberado!");

        break;
        
    } else {
        
        console.log("Senha incorreta!");

        if (tentativa === maxTentativas) {
            console.log("Conta Bloqueada!");
        }
    }
}*/



/*for (let i = 1; i <= 10; i++) {
    
    if (i % 2 === 0) {
       continue; 
    }
    console.log(i)
}*/



// Mostrar apenas  APROVADOS ( nota)

/*const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 5.0 },
  { nome: "Carlos", nota: 9.0 },
  { nome: "Diana", nota: 4.5 },
  { nome: "Eduardo", nota: 7.5 }
];

for (const aluno of alunos) {

    if(aluno.nota < 7) {
        continue;
    }

    console.log(`${aluno.nome} - Nota: ${aluno.nota}`)
}*/



// Contar vogais

/*const frase = prompt("Digite uma frase");

const vogais = "aeiouAEIOU";

let contador = 0;

let vogaisEncontradas = [];

for (const letra of frase) {
    
    if (vogais.includes(letra)) {
        
        contador++

        vogaisEncontradas.push(letra)
    }

}

console.log(`\nFrase: "${frase}"`);

console.log(`Quantidade de vogais: "${contador}"`);

console.log(`Vogais encontradas: "${vogaisEncontradas.join(", ")}"`);*/






/*const frase = prompt("Digite uma frase:");

let vogais = [];

let consoantes = [];

for (const letra of frase) {

    const caractere = letra.toLowerCase();

    if (caractere >= "a" && caractere <= "z") {
        

        if ("aeiou".includes(caractere)) {

            vogais.push(letra)
            
        
    } else {
        consoantes.push(letra)
    }
}
}*/



/*Array.metodo((elemento, index, array) => {
    return;
})*/



/*const frutas = ["Maca", "Banana", "Uva"];

frutas.forEach((element, index) => {
    console.log(index, element)

});

for (let i = 0; i < frutas.length; i++) {


}*/





//Filter


/*const novoArray = Array.filter((element) => {
    return condicao;

});*/






/*const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 18 },
  { nome: "Ana", idade: 22 },
];


const maioresDeIdade = pessoas.filter((pessoa)=>{

    return pessoa.idade >= 18;
});

console.log(maioresDeIdade)*/





/*const numeros = [1,2,3,4,5,6,7,8];

const pares = numeros.filter((numero)=> {
   
    return numero % 2 === 0 
});

console.log(pares)*/



/*const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 18 },
  { nome: "Ana", idade: 22 },
];

const idosos = pessoas.filter((pessoa)=>{
return pessoa.idade > 80;
});

console.log(idosos)*/



// crie um array com varios numeros.
//use filter para mostrar apenas os numeros maiores que 50.


/*const numeros = [10,25,50,60,75,30,90,45,100];

const maioresQue50 = numeros.filter((numero)=> {
    return numero > 50;
});

console.log(maioresQue50)*/



//MAP

/*const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 18 },
  { nome: "Ana", idade: 22 },
];

const nomes = pessoas.map((pessoa)=>{
     return pessoa.nome.toLocaleUpperCase();
});

console.log(nomes)*/


/*const numeros = [1, 2, 3,4, 5];

const dobro = numeros.map((numero)=> {
    return numero * 2;
});
console.log(dobro)*/



/*const produtos = ["Mouse", "Teclado", "Monitor"];

const frases = produtos.map((produto)=> {
     return  `Produto:${produto}`
});

console.log(frases);*/



/*const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 }
];

const resultado = pessoas.map((pessoa)=> {
    return {
        nome: pessoa.nome,

        maiorIdade: pessoa.idade >= 18
    }
});
console.log(resultado);*/



// Use map para transformar um array de precos em precos com desconto de 10%


/*const precos = [100, 200, 300];

const desconto = precos.map((preco)=> {
    return preco * 0.9;
});
console.log(desconto);*/



// use map para transformar:[1,2,3,4] em ["Numero 1", "numero 2"....]


/*const numeros = [1,2,3,4];

const tranformar = numeros.map((numero)=> {
   return `numero ${numero}`
});
console.log(tranformar);*/



//Find




/*const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 18 },
  { nome: "Ana", idade: 22 },
];

const maria = pessoas.find((pessoa)=> {
    return pessoa.nome === "Maria";
});

if (maria) {
    console.log("Pessoa encontrada:");
    console.log(maria)
} else {
    console.log("Pessoa encontrada:");
}
console.log(maria);*/



/// Procurar primeiro numero maior que 18

/*const numeros = [5,10,15,20,25];

const maiorNumero = numeros.find((numero) => {
    return numero > 18
});
console.log(maiorNumero);*/



/*const usuarios = [
  { id:1, nome:"Lucas" },
  { id:2, nome:"Maria" },
  { id:3, nome:"João" }
];

const usuario = usuarios.find((usuario)=> {
   return usuarios.id === 2;
});
console.log(usuarios);*/




//Encontre o primeiro número negativo do array.
/*const numeros = [5,8,-2,10,-7];


const negativo = numeros.find((numeros)=> {
      return numeros < 0;
});
console.log(negativo);*/




//REDUCE

/*Array.reduce((acc, element)=> {
    return novoAcc
} valorInicial);*/


/*const numeros = [10, 20, 30];

const soma = numeros.reduce((acc, numero)=> {
          
    console.log("ACC", acc);
    console.log("Numero atual", numero);

    return acc + numero
},0);

console.log(soma);*/




/*const pessoas = [
  { nome: "Lucas", idade: 20 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 18 },
  { nome: "Ana", idade: 22 },
];

const totalIdades = pessoas.reduce((acc, pessoas)=> {
        return acc + pessoas.idade;
}, 0);
console.log(totalIdades);*/




/*const pessoas = [
  { nome: "Lucas", },
  { nome: "Maria", },
  { nome: "João",  },
  { nome: "Ana", },
];

const nomes = pessoas.reduce((acc, pessoa)=> {
        return acc + " " + pessoa.nome;
},"");

console.log(nomes);*/


/*const nomes = ["Lucas","Maria","Joao"];

const frase = nomes.reduce((acc , nome) => {
    return acc + " " + nome;
});
console.log(frase);*/


/*const nomes = ["Lucas","Maria","Joao"];

const inicio = prompt("Digite o inicio da frase");

const frase = nomes.reduce((acc, nome) => {
     return acc + " " + nome
},inicio);

console.log(frase);*/








/*const frase = prompt("Digite uma frase");

const palavras = frase.split(" ");
console.log(palavras);

const resultado = palavras.reduce((acc, palavra) => {
      return acc + " " + palavra
});
console.log(resultado);*/







//Use reduce para descobrir:
//qual o maior numero do array.

/*const numeros= [10,50,30,100,25];

const maior = numeros.reduce((acc, numero) => {
       if (numero > acc) {
        return numero
       }

       return acc 
}, numeros[0]);

console.log(maior);*/










/*
# Parte 1
Use filter para pegar notas >= 8
---
# Parte 2


Use map para pegar apenas nomes

---
# Parte 3

```
Use find para encontrar "Batman"
```

---

# Parte 4

Use reduce para somar todas as notas
*/


/*const filmes= [
  { nome:"Vingadores", nota:9 },
  { nome:"Batman", nota:7 },
  { nome:"Dragon Ball", nota:10 },
  { nome:"Matrix", nota:8 }
];*/


/*const notas = filmes.filter((pessoa)=> {
      return pessoa.nota >= 8;
});

console.log(notas);*/



/*const nomes = filmes.map((filmes)=> {
      return filmes.nome;
});

console.log(nomes);*/




/*const batman = filmes.find((filme) => {
      return filme.nome === "Batman";
});

console.log(batman);*/



/*const somaNotas = filmes.reduce((acc, filme) => {
     return acc + filme.nota;
});
console.log(somaNotas);*/




//switch case

/*const dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terca");
        break;

    default:
        console.log("Dia Invalido");
        break;
}*/



/*const n1 = Number(prompt("Digite o primeiro numero:"));
const n2 = Number(prompt("Digite o primeiro numero:"));
const operacao = prompt("Digite a operacao (+, -, * ou /):");

switch (operacao) {
    case "+":
        console.log(`Resultado: ${n1 + n2}`)
        break;
    case "-":
        console.log(`Resultado: ${n1 + n2}`)
        break;
    case "*":
        console.log(`Resultado: ${n1 + n2}`)
        break;
    case "/":
        if (n2 === 0) {
            console.log("Erro: nao e possivel dividir por zero")
        } else {
            console.log.apply(`Resultado: ${n1 / n2}`)
        }
        console.log(`Resultado: ${n1 + n2}`)
        break;

    default:
        console.log("Operacao Invalida");
        break;
}*/







/*Crie um sistema de menu de video game:

1- Jogar
2- Configuracoes
3- Creditos
4- Sair*/


let opcao;

do {
    opcao = prompt(
      "MENU DO JOGO 1- Jogar  2- Configuracoes 3- Creditos 4- sair  Escolha uma opcao:"
    );

    switch (opcao) {
        case "1":
            console.log("Iniciando o jogo");
            break;
        case "2":
            console.log("Configurando o jogo");
            break;
        case "3":
            console.log("Creditos Desenvolvidos");
            break;
        case "4":
            console.log("Saindo do jogo");
            break;
    
        default:
            console.log("Opcao Invalida");
            break;
    }
    


} while (opcao !== "4");