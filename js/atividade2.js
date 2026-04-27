const paragrafo = document.getElementById('paragrafo');
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');

botao1.addEventListener('click', function(){
    paragrafo.style.color = 'red';
});

botao2.addEventListener('click', function(){
    document.body.style.backgroundColor = '#0000d0';
});
document.body