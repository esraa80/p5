const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");
menuBtn.addEventListener("click", function (e) {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

    // if (isOpen) {
    //     menuBtnIcon.innerHTML='<i class="ri-close-line"></i>';
    // } else{
    //     menuBtnIcon.innerHTML='<i class="ri-menu-line"></i>';
    // }
    
});

navLinks.addEventListener("click", function (e) {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
const scrollRevealOption1 = {
  distance: "50px",
  origin: "top",
  duration: 1000,
};
const scrollRevealOption2 = {
  distance: "50px",
  origin: "right",
  duration: 1000,
};
const scrollRevealOption3 = {
  distance: "50px",
  origin: "left",
  duration: 1000,
};

