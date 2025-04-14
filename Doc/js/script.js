// Interatividade JavaScript (Exemplos)

// Rolagem suave para as seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adicionar um efeito sutil ao passar o mouse nos projetos
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxshadow = '0 5px 10px rgba(0, 0, 0, 0.3)';
        card.style.transform = 'translateY(-8px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxshadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
        card.style.transform = 'translateY(0)';
    });
});

// Botão Voltar ao Topo
let backToTopBtn = document.getElementById("backToTopBtn");

// Define a distância em pixels para mostrar o botão (ajuste este valor conforme necessário)
const scrollThreshold = 20;

// Mostra o botão quando o usuário rola 20px para baixo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Faz a página rolar para o topo quando o botão é clicado
backToTopBtn.addEventListener("click", function() {
    // Para navegadores mais recentes
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Você pode adicionar mais interatividade aqui, como validação de formulário, animações, etc.