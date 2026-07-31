/*const idade = Number(prompt("Digite sua idade"));
if (idade >= 18) {
    alert("Voce é de maior!")
} else {
    alert("Voce nao é de maior!")
}*/

/*const idade = 20;
const temDocumento = true;
const estaLista = true;

if (idade >= 18 && temDocumento && estaLista) {
    console.log("Pode entrar!");
} else {
    console.log("Acesso Negado!");
}*/

/*const temDinheiro = false;
const temCartao = true;
const temPix = false;

if (temDinheiro || temCartao || temPix ) {
    console.log("Pode pagar!")
} else {
    console.log("Não pode pagar!")
}*/

/*const usuario = "admin";
const senha = "1234";

const senhaCorreta = (senha == "1234")
const ehAdmin = (usuario === "admin")
const ehGerente = (usuario === "gerente")

if ((ehAdmin || ehGerente) && senhaCorreta) {
    console.log("Liberado!")
} else {
    console.log("Não liberado!")
}*/

/*const usuario = prompt("Usuário:")
const senha = prompt("Senha:")

const acessoAdmin = (usuario === "admin" && senha === "1234")
const acessoUser = (usuario === "user" && senha === "senha123")

if (acessoAdmin || acessoUser) {
    alert("Acesso liberado!")
} else {
    alert("Acesso negado!")
}*/

/*const nota = Number(prompt("Digite sua nota:"));

if (nota >= 80) {
    alert("Aprovado");
} else if (nota >= 60) {
    alert("Recuperação!");
} else {
    alert("Reprovado!");
}*/

/*const temp = Number(prompt("Temperatura atual: "));

if (Number.isNaN(temp)) {
     alert("Temperatura invalida!");
    
} else if(temp < 0){
     alert("Muito frio")
} else if (temp >= 0 && temp <= 15){
     alert("Frio (0 C a 15 C)")
}else if (temp > 15 && temp <= 25){
     alert("Agradavel (16 C a 25 C)")
}else if (temp > 25 && temp <= 35){
     alert("Muito quente (Acima de 35 C)")
} else {
    console.log("Muito quente! (Acima de 35C)")
}*/

const nota = Number(prompt("Digite a nota (0-100:"));

/*if (Number.isNaN(nota)) { //Validação
    alert("Nota inválida! Digite apenas números.")
} else if (nota < 0) {
    alert("Nota não pode ser negativa.")
}else if(nota > 100) {
    alert("Nota não pode ser maior que 100.")
}else {
if (nota >= 80) {
    alert(`Aprovado! Nota: ${nota}`);
} else if(nota >= 60) {
    alert(`Recuperação! Nota: ${nota}`)
}else {
   alert("Reprovado!") 
}

}*/

if (Number.isNaN(nota) || nota < 0 || nota > 100) {
    
} else {
    
}



