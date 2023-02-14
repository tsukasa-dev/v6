const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})

document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})

// When the user scrolls the page, execute myFunction

  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 2000);

  function handleScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    const projectImages = document.querySelectorAll(".projets h1 img");
    document.getElementById("myBar").style.width = scrolled + "%";
    
    const premierBlock = document.querySelector(".premierblock");
    const title = document.querySelector(".title");
    const progressBar = document.querySelector(".progress-bar");
    const js = document.querySelector(".js");
    const jsRect = js.getBoundingClientRect();
    const isVisible = (jsRect.top >= 0) && (jsRect.bottom <= window.innerHeight);
    
    if (isVisible) {
      premierBlock.classList.add("scrolled");
    } else {
      premierBlock.classList.remove("scrolled");
    }
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      title.classList.remove("scrolled");
      title.scrollIntoView({behavior: "smooth"});
      progressBar.classList.add("dark");
      projectImages.forEach(img => img.classList.add("dark"))
    } else {
      title.classList.add("scrolled");
      premierBlock.scrollIntoView({behavior: "smooth"});
      progressBar.classList.remove("dark");
      projectImages.forEach(img => img.classList.remove("dark"));
    }
  }


  

  window.onscroll = handleScroll;