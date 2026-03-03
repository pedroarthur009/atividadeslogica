
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
let nome = 'Pedro'
//let idade = '16'
let hobby = 'videogame'
//let Apresentação = `me chamo ${nome} tenho ${idade} e gosto de ${hobby}`

console.log();

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
//let cidade = 'JaraguadoSul'
let temperaturaAtual = '26'
//let minhacity = `Hoje em ${cidade} está fazendo ${temperaturaAtual}°C, perfeito para se divertir `

console.log();

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
let texto = 'massa';               // string
let numero = 42;                 // number
let ativo = false;                // boolean
let indefinido;                    // undefined
let nulo = null;                 // null



console.log(`${typeof texto} valor = ${typeof numero}, tipo = ${typeof ativo}`);

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
let personagem = 'batman'
let idade = '30'
let cidade = 'gotam'
let missão = 'prender o coringa'
let completar = `${personagem} tem ${idade} e vive em ${cidade} e batalha para ${missão}`
console.log(completar);

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
let meunome = 'predo'
let meta = 'completar a escola'
let esseano = `${meunome} este ano tem a meta de ${meta}`

console.log(esseano );

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:


console.log(`
    ========================================
    |            SISTEMA DO USÁRIO         |
    ========================================
    1  - Ver Perfil
    2  - Editar Perfil
    3  - Configurações
    4  - Notificações
    5  - Relatórios
    6  - Ajuda
    7  - Sobre o Sistema
    0  - Sair
    ========================================
    Digite o número da opção desejada
    ========================================`);
