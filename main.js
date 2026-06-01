// Aguarda todo o documento HTML carregar antes de rodar os scripts
document.addEventListener("DOMContentLoaded", () => {
    
    /* =======================================================
       1. FUNCIONALIDADE: MENU RESPONSIVO (HAMBÚRGUER)
       ======================================================= */
    const btnMenu = document.getElementById("btn-menu");
    const navMenu = document.getElementById("nav-menu");
    const linksMenu = document.querySelectorAll(".nav-link");

    // Abre e fecha o menu ao clicar no botão hambúrguer
    btnMenu.addEventListener("click", () => {
        navMenu.classList.toggle("ativo");
        btnMenu.classList.toggle("aberto");
    });

    // Fecha o menu automaticamente ao clicar em qualquer link dele (ajuda na navegação)
    linksMenu.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("ativo");
            btnMenu.classList.remove("aberto");
        });
    });


    /* =======================================================
       2. FUNCIONALIDADE: CARDS INFORMATIVOS INTERATIVOS
       ======================================================= */
    const botoesCards = document.querySelectorAll(".btn-card");

    botoesCards.forEach(botao => {
        botao.addEventListener("click", (evento) => {
            // Encontra o card pai do botão que foi clicado
            const cardPai = evento.target.closest(".card-interativo");
            // Seleciona a div de conteúdo extra que está dentro desse card pai
            const conteudoExtra = cardPai.querySelector(".conteudo-extra");

            // Alterna a classe 'ativo' para expandir ou recolher via CSS
            conteudoExtra.classList.toggle("ativo");

            // Muda o texto do botão de acordo com o estado do card
            if (conteudoExtra.classList.contains("ativo")) {
                evento.target.innerText = "Ver menos";
            } else {
                evento.target.innerText = "Ver mais";
            }
        });
    });

});

/* =======================================================
   3. FUNCIONALIDADE: CARROSSEL AUTOMÁTICO DE IMAGENS/TEXTOS
   ======================================================= */
let indexSlideAtual = 0;
// Tempo em milissegundos para a troca automática (4000ms = 4 segundos)
const tempoSlide = 4000; 

function mostrarSlides() {
    const slides = document.querySelectorAll(".slide");
    const pontos = document.querySelectorAll(".ponto");

    // Se por acaso os elementos não existirem na página, para a execução
    if (slides.length === 0) return;

    // Desativa todos os slides e todos os pontos indicadores
    slides.forEach(slide => slide.classList.remove("ativo"));
    pontos.forEach(ponto => ponto.classList.remove("ativo"));

    // Incrementa o índice para ir ao próximo slide
    indexSlideAtual++;

    // Se o índice passar do número de slides, ele zera e volta para o primeiro
    if (indexSlideAtual > slides.length) {
        indexSlideAtual = 1;
    }

    // Ativa o slide atual e o ponto correspondente (Subtrai 1 pois arrays começam em 0)
    slides[indexSlideAtual - 1].classList.add("ativo");
    pontos[indexSlideAtual - 1].classList.add("ativo");
}

// Inicia o temporizador que chama a função de tempos em tempos
let temporizadorCarrossel = setInterval(mostrarSlides, tempoSlide);

// Função chamada se o usuário clicar diretamente em um dos pontos indicadores (bolinhas)
function mudarSlide(indiceAlvo) {
    // Para o temporizador atual para reiniciar a contagem de tempo do zero
    clearInterval(temporizadorCarrossel);
    
    // Atualiza o índice global baseado no ponto clicado
    indexSlideAtual = indiceAlvo;

    const slides = document.querySelectorAll(".slide");
    const pontos = document.querySelectorAll(".ponto");

    // Reseta o estado ativo de tudo
    slides.forEach(slide => slide.classList.remove("ativo"));
    pontos.forEach(ponto => ponto.classList.remove("ativo"));

    // Ativa especificamente o que o usuário escolheu
    slides[indexSlideAtual].classList.add("ativo");
    pontos[indexSlideAtual].classList.add("ativo");

    // Reinicia o carrossel automático para continuar rodando sozinho
    temporizadorCarrossel = setInterval(mostrarSlides, tempoSlide);
}