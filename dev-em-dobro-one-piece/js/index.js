const botoes = document.querySelectorAll(".botao"); //queryselectorall seleciona todas classes com nome .botao
const personagens = document.querySelectorAll('.personagem');

/*quando for 2 argumentos, coloca entre perenteses () */
botoes.forEach((botao, indice) => { //foreach pega toda classe botao para adicionar algum evento
    botao.addEventListener("click", () => { //addeventlistener adiciona o evento clique a classe botao
    const botaosel = document.querySelector('.botao.selecionado'); //queryselector porque só tem uma classe.
    botaosel.classList.remove('selecionado');
    
        botao.classList.add("selecionado") //classlist.add adiciona a classe selecionado
        
        const personagemsel = document.querySelector('.personagem.selecionado');
        personagemsel.classList.remove('selecionado')
        
        personagens[indice].classList.add('selecionado')
    })
});