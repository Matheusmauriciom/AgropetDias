var menu = document.querySelector("nav");
document.getElementById("hamburger").addEventListener("click", () => {
  menu.style.display = "flex";
});

document.getElementById("close").addEventListener("click", () => {
  menu.style.display = "none";
});

document.querySelectorAll(".nav-item").forEach((navitem) => {
  navitem.addEventListener("click", () => {
    if (window.innerWidth < 769) {
      menu.style.display = "none";
    }
  });
});
