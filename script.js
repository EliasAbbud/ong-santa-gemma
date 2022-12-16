window.onscroll = () => {
  var atual = "";
  var sections = window.document.querySelectorAll(".section-menu")
  var navLi = window.document.querySelectorAll(".nav-link")

  const scrollToTop = document.querySelector('.scroll-button');

  // Add event listener to make button appear when scrolling down
  const showBtn = window.addEventListener('scroll', () => {
      if (window.scrollY < 100) {
        scrollToTop.classList.remove('scroll-to-top');
      } else {
        scrollToTop.classList.add('scroll-to-top');
      }
  });

  if(navLi.forEach(li => li.classList.contains("active") == false)) {
    document.querySelector(".link-topo").style.display = "none"; 
  }
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      atual = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(atual)) {
      li.classList.add("active");

    }
  });
};

  // console.log(navLi.forEach((li) => {li.classList.contains("active") }))

  