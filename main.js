document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MENU RESPONSIVO
    const btnMenu = document.getElementById("btn-menu");
    const navMenu = document.getElementById("nav-menu");

    if(btnMenu && navMenu) {
        btnMenu.addEventListener("click", () => {
            navMenu.classList.toggle("ativo");
        });
    }

    // 2. CARDS INTERATIVOS
    const botoesCards = document.querySelectorAll