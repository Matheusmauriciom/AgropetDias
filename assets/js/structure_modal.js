// Insere o modal e botões de navegação no corpo da página
document.body.insertAdjacentHTML('beforeend', 
    `<div id="imageModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="modalImage">
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>`
  );
  
  // Selecione todos os elementos com a classe 'gallery-item'
  const galleryItems = document.querySelectorAll('.gallery-item img');
  let currentIndex = 0; // Para controlar a imagem atual no modal
  
  // Selecione o modal e a imagem dentro dele
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById("modalImage");
  
  // Selecione o botão de fechar e os botões de navegação
  const closeBtn = document.getElementsByClassName("close")[0];
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  
  // Função para abrir o modal e mostrar a imagem
  function openModal(index) {
    modal.style.display = "flex"; 
    modalImg.src = galleryItems[index].src;
    currentIndex = index;
  }
  
  // Adicione um evento de clique para cada imagem da galeria
  galleryItems.forEach((img, index) => {
    img.onclick = function() {
      openModal(index);
    };
  });
  
  // Quando o usuário clicar no botão de fechar, feche o modal
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }
  
  // Quando o usuário clicar fora da imagem, feche o modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // Função para mostrar a imagem anterior
  function showPrevImage() {
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    modalImg.src = galleryItems[currentIndex].src;
  }
  
  // Função para mostrar a próxima imagem
  function showNextImage() {
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    modalImg.src = galleryItems[currentIndex].src;
  }
  
  // Adicione eventos de clique nos botões de navegação
  prevBtn.onclick = showPrevImage;
  nextBtn.onclick = showNextImage;
  
  // Adicione suporte para teclas de navegação (esquerda e direita)
  document.onkeydown = function(event) {
    if (modal.style.display === "flex") {
      if (event.key === "ArrowLeft") {
        showPrevImage();
      } else if (event.key === "ArrowRight") {
        showNextImage();
      }
    }
  }
  