/*🟢 Nível Básico
1. Verificar maioridade
Crie um programa que solicite a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.*/

/*const maiorIdade = Number(prompt("Digite sua idade"))

if (maiorIdade >= 18) {
    alert("Maior de idade")
} else {
    alert("Menor de idade!")
}*/

/*2. Positivo ou Negativo
Solicite um número ao usuário e informe se ele é positivo ou negativo. Considere o número 0 como negativo.


const numero = Number(prompt("Digite um número"))

if (numero >= 1) {
    alert("Numero positivo!")
} else {
    alert("Numero negativo!")
}*/

/*3. Aprovação em uma prova
Peça ao usuário a nota final de um aluno (de 0 a 100). Caso a nota seja 60 ou maior, informe que ele foi Aprovado. Caso contrário, informe que foi Reprovado. 

const numeroAprovacao = Number(prompt("Digite sua nota:"))

if (numeroAprovacao >= 60) {
    alert("Aprovado!")
} else {
    alert("Reprovado!")
}*/

/*4. Positivo, Negativo ou Zero
Leia um número informado pelo usuário e indique se ele é:
Positivo; 
Negativo; 
Zero.*/

/*const numeroInformado = Number(prompt("Digite um número:"));

if (numeroInformado >=1 ) {
    alert("Numero positivo!")
}else if (numeroInformado <0){
alert("Numero negativo!")
}else{
alert("Zero!")
}*/

/*5. Classificação por idade
Solicite a idade de uma pessoa e classifique-a conforme as regras abaixo:
Criança: de 0 a 12 anos; 
Adolescente: de 13 a 17 anos; 
Adulto: 18 anos ou mais. */

/*const idade = Number(prompt("Digite sua idade:"))

if (idade >= 0 && idade < 13) {
    alert("Criança")

}else if (idade >=13 && idade < 18) {
    alert("Adolescente!")

}else {
    alert("Adulto!")
}*/


/*6. Par ou Ímpar
Solicite um número inteiro ao usuário e informe se ele é par ou ímpar.

const numero = Number(prompt("Digite um número:"))

if (numero % 2 == 0) {
    alert("Numero é par!")
} else {
    alert("Numero é impar!")
}*/

/*Calculadora simples
Crie uma calculadora que:
Solicite o primeiro número; 
Solicite a operação desejada (+, -, * ou /); 
Solicite o segundo número. 
Ao final, exiba o resultado da operação escolhida. Caso seja informada uma operação inválida, exiba uma mensagem de erro.*/

/*const num1 = Number(prompt("Digite o primeiro número:"))
const operacao = (prompt("Digite a operação desejada entre +, -, * ou / "))
const num2 = Number(prompt("Digite o segundo número:"))

let resultado;

if (operacao == "+") {
    resultado = num1 + num2
}else if (operacao == "-") {
    resultado = num1 - num2
}else if(operacao == "*") {
    resultado = num1 * num2
}else if (operacao == "/") {
    resultado = num1 / num2
}else {
     alert("Resultado invalido!")
}
if (resultado !== undefined) {
    alert(`O resultado foi ${resultado}`);
}*/

const usuario = "admin"
const senha = 1234
const digitoUsuario = prompt("Digite o usuario")
const senhaUsuario = prompt("Digite a senha")

if (digitoUsuario == usuario && senhaUsuario == senha) {
    alert("Login bem-sucedido")
} else {
    alert("Acesso negado")
}







