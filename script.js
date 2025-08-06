function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

const lista = document.querySelector('#lista')

lista.textContent=linguagens[0];
lista.textContent=linguagens[1];
lista.textContent=linguagens[2];

let aluno1={
    nome:'Jaqueline',
    idade:18,
    anoLetivo:'Cursando onsino médio',
    materiasFavoritas;['Biologia', 'Educação Física', 'Matemática II']
}

Usamos console.log() para imprimir as propriedades do objeto. A ultima linha imprime o segundo item da lista materiasFavoritas (indice 1).