const botaoCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagen')

botaoCarrossel.forEach((botao, indice ) => {
    botao.addEventListener('click', () => {

        desativaBotaoSelecionado();

        ativaBotaoAtivo(botao);

        esconderImagemAtiva();

        revelarImagemAtiva(indice);
    })
})

function revelarImagemAtiva(indice) {
    imagens[indice].classList.add('ativo');
}

function esconderImagemAtiva() {
    const imagenAtiva = document.querySelector('.ativo');
    imagenAtiva.classList.remove('ativo');
}

function ativaBotaoAtivo(botao) {
    botao.classList.add('selecionado');
}

function desativaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
