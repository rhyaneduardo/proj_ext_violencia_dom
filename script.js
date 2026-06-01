// Pega o botão do HTML
const botaoTopo = document.getElementById("btn-topo");

// Monitora a rolagem da página
window.onscroll = function() {
    verificarRolagem();
};

function verificarRolagem() {
    // Se rolou mais de 300 pixels para baixo, mostra o botão. Se não, esconde.
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        botaoTopo.style.display = "block";
        // Um mini "timeout" para o efeito de transição de opacidade funcionar
        setTimeout(() => { botaoTopo.style.opacity = "1"; }, 10);
    } else {
        botaoTopo.style.opacity = "0";
        // Esconde o elemento depois que a transição de sumir acabar
        setTimeout(() => { if(botaoTopo.style.opacity === "0") botaoTopo.style.display = "none"; }, 300);
    }
}

// Quando clicar no botão, scrolla para o topo
botaoTopo.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Faz a subida ser suave!
    });
});