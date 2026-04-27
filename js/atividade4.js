
const input = document.querySelector('#input');
const botao = document.querySelector('#botao');
const lista = document.querySelector('#lista');

botao.addEventListener('click', () => {
    const textolista = input.value;

    if (textolista === "") {
        alert("Digite algo primeiro!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = textolista;
  
    const btnRemover = document.createElement('button');

    btnRemover.textContent = "Remover";
    btnRemover.addEventListener('click', () => {
        li.remove();
    });
    
    li.appendChild(btnRemover);
    lista.appendChild(li);

    input.value = "";
    input.focus();
});