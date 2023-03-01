/* 
    3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
        • O menor valor de faturamento ocorrido em um dia do mês;
        • O maior valor de faturamento ocorrido em um dia do mês;
        • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
 */

const { faturamentoMensal } = require("./faturamentoMensal");

const valores = faturamentoMensal.map((dia) => dia.valor);

const menorValor = () => {
  const diasComFaturamento = valores.filter((valor) => valor > 0);
  return Math.min(...diasComFaturamento);
};

const maiorValor = () => {
  return Math.max(...valores);
};

const calcMedia = () => {
  const diasSemFaturamento = valores.filter((dia) => dia == 0);

  const media =
    valores.reduce((a, b) => a + b) /
    (valores.length - diasSemFaturamento.length);

  return media;
};

const diasAcimaMedia = () => {
  const media = calcMedia();
  let diasAcimaMedia = [];
  valores.forEach((dia) => {
    if (dia > media) diasAcimaMedia.push(dia);
  });

  return diasAcimaMedia;
};

console.log("Menor valor de faturamento ocorrido em um dia do mês:", menorValor());
console.log("Maior valor de faturamento ocorrido em um dia do mês:", maiorValor());
console.log("Número de dias no mês em que o valor de faturamento diário foi superior à média mensal:", diasAcimaMedia().length);
