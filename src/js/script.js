// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const gambar = document.getElementById("gambarBerubah");
  const gambarList = [
    "/img/HomepageFiks.png",
    "/img/DetailFiks.png",
    "/img/FreelanceFiks.png"
  ];

  let index = 0;

  
  gambar.style.backgroundImage = `url('${gambarList[index]}')`;
  gambar.style.opacity = 1;

  function gantiGambar() {
    
    gambar.style.opacity = 0;

    setTimeout(() => {
    
      index = (index + 1) % gambarList.length;
      gambar.style.backgroundImage = `url('${gambarList[index]}')`;

      // Fade in
      gambar.style.opacity = 1;
    }, 1000); 
  }

  setInterval(gantiGambar, 4000);


