// Obtém todos os itens de navegação e seções
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section, main');


// Define "Início" como ativo por padrão quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});

// Função para verificar se a seção está no viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= 150 && // Verifica se o topo da seção está dentro do ajuste
        rect.bottom >= 150 // Verifica se o final da seção está visível
    );
}

// Função para atualizar o item de navegação ativo
function updateActiveNavItem() {
    // Caso especial para a seção "Início" (topo da página)
    if (window.scrollY < 100) { // Se próximo do topo
        navItems.forEach(item => item.classList.remove('active')); // Remove "active" de todos os itens
        const homeLink = document.querySelector('a[href="#home"]');
        if (homeLink) {
            homeLink.classList.add('active'); // Define "Início" como ativo
        }
        return;
    }

    // Verifica outras seções
    sections.forEach(section => {
        if (isInViewport(section)) { // Se a seção está visível no viewport
            const sectionId = section.getAttribute('id');
            navItems.forEach(item => {
                const href = item.getAttribute('href').substring(1); // Remove o # do href
                if (href === sectionId) {
                    item.classList.add('active'); // Define o item correspondente como ativo
                } else {
                    item.classList.remove('active'); // Remove "active" dos outros
                }
            });
        }
    });
}

// Adiciona evento de rolagem com controle de desempenho (throttling)
let ticking = false;
document.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveNavItem();
            ticking = false; // Reseta o estado após atualizar
        });
        ticking = true;
    }
});

// Manipula os cliques nos itens de navegação
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão do link
        const targetId = item.getAttribute('href'); // Obtém o ID de destino
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a seção
        }
        
        // Atualiza o estado ativo
        navItems.forEach(nav => nav.classList.remove('active')); // Remove "active" de todos
        item.classList.add('active'); // Define o item clicado como ativo
    });
});
