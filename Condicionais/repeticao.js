
/*let contador = 1;

while (contador <= 5) {
    console.log("Contagem:", contador);

    contador++
}*/

/*let tempo = 10;

while (tempo > 0) {
    console.log(`${tempo}...`);

    tempo--;
}

console.log("Feliz ano Novo!!!")*/

  

/*const senhaCorreta = "123456";
let tentativa = "";

while (tentativa !== senhaCorreta) {
    
    tentativa = prompt("Digite a senha:");

    if (tentativa === senhaCorreta) {
        console.log("Senha correta! Acesso Liberado.")
    } else {
        console.log("Senha incorreta! Tente Novamente.")
    }

}*/




//Somar numeros ate ultrapassar 100

/*let soma = 0;
let numero = 1;

console.log("Somando numeros ate passar de 100...");

while (soma < 100) {
  
    soma += numero

    console.log(`${numero} Soma parcial: ${soma}`);

    numero++;
}*/






// mostre a tabuada do numero que o usuario escolher

/*let numero = Number(prompt("Qual tabuada voce quer ver?"));

if (Number.isNaN (numero)) {
    console.log("Digite um numero valido!");
} else {
    let multiplicador = 1;

    console.log(`\n Tabuada do ${numero} \n`);

    while (multiplicador <= 10) {
        const resultado = numero * multiplicador;
        console.log(`${numero} x ${multiplicador} =  ${resultado}`);

        multiplicador++
    }
}*/



/*let opcao;


do {
    console.log("\n===== Menu ======")
    console.log("1 - Ver Saldo")
    console.log("2 - Fazer Deposito")
    console.log("3 - Fazer Saque")
    console.log("0 - Sair")
    console.log("============")

    opcao = prompt("Escolha uma opcao:")

    if (opcao ==="1") {
        console.log("Seu saldo e de R$ 1000,00");
    } else if(opcao === "2"){
       console.log("Deposito realizado!");
    } else if (opcao === "3"){
     console.log("Saque realizado!");
    } else if(opcao === "0"){
     console.log("Ate logo!");
} else {
    console.log("opcao invalida!");
}

} while (opcao != "0");*/



/*const numeroSecreto =  Math.floor( Math.random() * 10) + 1;

let palpite;
let tentativas = 0;

console.log("Adivinhe o numero entre 1 e 10!");

do {
    palpite = numeroSecreto(prompt("Seu palpite:"));
    tentativas++

    if (Number.isNaN(palpite)) {
        console.log("Digite um numero valido!");
    } else if(palpite < numeroSecreto){
        console.log("Muito baixo! Tente um numero maior.");
    } else if (palpite > numeroSecreto){
        console.log("Muito alto! Tente um numero menor.");

} else {
console.log(`ACERTOU! oO numero era ${numeroSecreto}`);
console.log(`Voce precisou de ${tentativas} tentativas.`);
}

} while (palpite !== numeroSecreto);*/




/*for (let i = 1; i <= 10; i++) {
    console.log(`Numero: ${i}`)
}*/

const numero = Number(prompt("Tabuada de qual numero"));

if (Number.isNaN(numero)) {
    console.log("Numero invalido!")
} else {
    for (let i = 1; i <= 10; i++) {

        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`)
        
    }
}


