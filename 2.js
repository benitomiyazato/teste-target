/*
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
    (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
    escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci 
    e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

    IMPORTANTE:
    Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

const givenNumber = 21;
let n1 = 0;
let n2 = 1;
let next = 0;

let fibonacciSequence = [];

while (next <= givenNumber) {
  fibonacciSequence.push(next);
  n1 = n2;
  n2 = next;
  next = n1 + n2;
}

console.log("Sequência Fibonacci: ", fibonacciSequence);
if (fibonacciSequence.includes(givenNumber)) {
  console.log(`O número ${givenNumber} está presente na sequência de Fibonacci`);
} else {
  console.log(`O número ${givenNumber} não está presente na sequência de Fibonacci`);
}
