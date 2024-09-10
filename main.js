import { Prova } from './exam.js';

const peso = { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2 };

const resposta = {
  pessoa: 'Professor',
  valores: { q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
};

const prova = new Prova(resposta, peso);

prova.adicionar({
  aluno: 'Alice',
  valores: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
});


console.log('Média:', prova.media());
console.log('Notas Mínimas:', prova.minimo());
console.log('Notas Máximas:', prova.maximo());
console.log('Notas Menores que 5:', prova.menorQue(5));
console.log('Notas Maiores que 0:', prova.maiorQue(0));