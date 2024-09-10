export class Prova {
    constructor(resposta, peso) {
      this.peso = peso;
      this.resposta = resposta;
      this.provas = [];
    }
  
    adicionar(prova) {
      prova.nota = Object.keys(prova.valores).reduce((total, pergunta) => {
        return (
          total + (prova.valores[pergunta] === this.resposta.valores[pergunta] ? this.peso[pergunta] : 0)
        );
      }, 0);
  
      this.provas.push(prova);
    }
  
    media() {
      let soma = Object.values(this.provas).reduce(
        (soma, prova) => soma + prova.nota,
        0
      );
  
      return soma / this.provas.length;
    }
  
    minimo(contagem = 1) {
      let notas = this.provas.map((prova) => prova.nota);
  
      notas.sort((a, b) => a - b);
  
      return notas.slice(0, contagem);
    }
  
    maximo(contagem = 1) {
      let notas = this.provas.map((prova) => prova.nota);
  
      notas.sort((a, b) => a - b);
  
      return notas.slice(-contagem);
    }
  
    menorQue(limite) {
      let notas = this.provas.map((prova) => prova.nota);
  
      notas.sort().reverse();
  
      return notas.filter((nota) => nota < limite);
    }
  
    maiorQue(limite) {
      let notas = this.provas.map((prova) => prova.nota);
  
      notas.sort().reverse();
  
      return notas.filter((nota) => nota > limite);
    }
}
