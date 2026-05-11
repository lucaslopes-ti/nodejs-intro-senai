

// Este é um comentário de linha única
// Const: é um valor que não muda
const nomeSistema = "Sistema de Gestão Escolar";
const pi = 3.14;

// let: é um valor que pode mudar
let alunosMatriculados = 100;
let aulaAtiva = true;

// var: é um valor que pode mudar, mas tem escopo global
var mostrarSite = true;
const site = "www.senai.com.br";


console.log("Bem-vindo ao " + nomeSistema);
console.log("Alunos matriculados: " + alunosMatriculados);
console.log("Aula ativa: " + aulaAtiva);

if (mostrarSite){
    console.log("Acesse nosso site: " + site);
}

const portaServidor = 3000;
let usuarioConectados = 10;
usuarioConectados += 5; // Incrementa o número de usuários conectados
usuarioConectados = usuarioConectados + 5; // Outra forma de incrementar

if (true){
    let variavelLet = "Esta variável é acessível apenas dentro deste bloco";
    var variavelVar = "Esta variável é acessível em todo o escopo da função ou globalmente";
}

console.log(variavelVar); // Funciona, pois var tem escopo global
// console.log(variavelLet); // Erro, pois let tem escopo de bloco


// === Operadores Matemáticos ===
let numero1 = 10;
let numero2 = 3;

console.log("Soma: " + (numero1 + numero2));
console.log("Subtração: " + (numero1 - numero2));
console.log("Multiplicação: " + (numero1 * numero2));
console.log("Divisão: " + (numero1 / numero2));
console.log("Resto da divisão: " + (numero1 % numero2));

// === if, else if, else ===
const notaAluno = 6.5

if (notaAluno >= 7) {
    console.log("Aluno aprovado!");
} else if (notaAluno >= 5) {
    console.log("Aluno em recuperação.");
} else {
    console.log("Aluno reprovado.");
}

// === And, or ===
const usuarioAdmin = true;
const senhaCorreta = true;

if (usuarioAdmin && senhaCorreta) {
    console.log("Acesso concedido. Liberado ao Painel");
} else {
    console.log("Acesso negado.");
}

const diaSemana = "Sábado";
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    console.log("Hoje é fim de semana, o servidor está em manutenção.");
}


// === Loop For, while ===

for (let i = 1; i < 5; i++){
    console.log("Contagem: " + i);
}

const multiplicador = 7;
for (let i = 1; i <= 10; i++){
    console.log(multiplicador + " x " + i + " = " + (multiplicador * i));
}


let bateriaRobo = 100;

while (bateriaRobo > 80) {
    console.log("bateria do robô: " + bateriaRobo + "% - O robô está funcionando normalmente.");
    bateriaRobo -= 5;
}

console.log("bateria do robô: " + bateriaRobo + "% - O robô precisa ser recarregado.");


let tecnologias = ["Node.js", "React", "MongoDB", "Express"];
console.log("Tecnologias utilizadas no projeto:", tecnologias);
console.log("Tecnologias utilizadas no projeto:", tecnologias[0]);
console.log("Tamanho do array:", tecnologias.length);

// pilha
tecnologias.push("TypeScript");
console.log("Apos push:", tecnologias);

tecnologias.pop();
console.log("Apos pop:", tecnologias);

// fila
tecnologias.shift();
console.log("Apos shift:", tecnologias);

tecnologias.unshift("Angular");
console.log("Apos unshift:", tecnologias);


function darBoasVindas(nome){
    return "Bem-vindo, " + nome + "!";
}

darBoasVindas("Lucas");
darBoasVindas("Maria");
console.log(darBoasVindas());

function calcularDesconto(preco, desconto){
    let valorDesconto = (preco * desconto) / 100;
    let precoFinal = preco - valorDesconto;
    return precoFinal;
}

let precoProduto = 100;
let valorPago = calcularDesconto(precoProduto, 20);
console.log("Preço final com desconto: R$ " + valorPago);

function somarTradicional(a, b) {
    return a + b;
}

// Arrow function
const somarArrow = (a, b) =>  a + b;

const calcularTaxa = (valor) => {
    const taxa = 0.1; // 10% de taxa
    return valor * taxa;
}

console.log("Soma tradicional: " + somarTradicional(5, 3));
console.log("Soma com arrow function: " + somarArrow(5, 3));
console.log("Taxa calculada: " + calcularTaxa(100));


/*
const nomesAtivos = ativos.map(cliente => cliente.nome).join(', ');
const nomesMaiores = maioresDeIdade.map(cliente => cliente.nome).join(', ');


console.log(`--- Resultados da Busca ---`);
console.log(`Clientes Ativos (${ativos.length}): ${nomesAtivos}`);
console.log(`Clientes Maiores de Idade (${maioresDeIdade.length}): ${nomesMaiores}`);
*/
    