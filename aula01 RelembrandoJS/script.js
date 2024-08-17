// Exercício 01

function Somar(a, b) {
    return a + b;
}
console.log(Somar(1, 2));

// Exercício 02

function ParOuImpar(listaNumeros) {
    for (let i = 0; i < listaNumeros.length; i++) {
        if (i % 2 === 0) {
            console.log(i + " é par");
        } else {
            console.log(i + " é ímpar");
        }
    }
}

listaNumeros = [0,1,2,3,4,5,6,7,8,9,10];
ParOuImpar(listaNumeros);

// Exercício 03
//Html é uma linguagem de estruturação, que atribui elementos para o desenvolvimento de uma página web.
//CSS é uma linguagem de estilização, que pode dar estilo a elementos HTML e à uma página web, mudando atributos decorativos nos elemntos.
//Javascript é uma linguagem de programação, que é exclusiva para o desenvolvimento web, e que desenvolve a lógica de componentes/objetos HTML, e/ou estilos em CSS, para dinamizar a página web.