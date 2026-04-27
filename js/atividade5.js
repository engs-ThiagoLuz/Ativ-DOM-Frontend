const input = document.querySelector('#input');
const botaoAdicionar = document.querySelector('#botao');
const lista = document.querySelector('#lista');

document.addEventListener("DOMContentLoaded", () => {
    const textinhos = JSON.parse(localStorage.getItem('meustextos')) || [];
    textinhos.forEach(tarefa => criarElementoTarefa(tarefa));
});

function criarElementoTarefa(texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    

    lista.appendChild(li);
}

function salvar() {
    const todosLi = document.querySelectorAll('li');
    const array = [];

    todosLi.forEach(li => {
        array.push(li.firstChild.textContent); 
    });

    localStorage.setItem('meustextos', JSON.stringify(arrayTarefas));
}

botaoAdicionar.addEventListener('click', () => {
    const valor = input.value.trim();

    if (valor !== "") {
        criarElementoTarefa(valor); 
        salvar();                   
        input.value = "";          
        input.focus();
    }
});