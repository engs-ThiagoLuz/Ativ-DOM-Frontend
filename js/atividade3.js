const texto = document.getElementById('texto');
const botao = document.getElementById('botao');
const lista = document.getElementById('lista');

function adicionarItem() {
    const textoItem = texto.value;

    if (textoItem.trim() === "") return;


    const novoItem = document.createElement('li'); 
    novoItem.textContent = textoItem;

    lista.appendChild(novoItem);

    texto.value = '';
    texto.focus();
}

botao.addEventListener('click', adicionarItem);