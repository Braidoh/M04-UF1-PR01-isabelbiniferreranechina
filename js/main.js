document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('menu-button');
  const nav = document.querySelector('.header');

  dropdownButton.addEventListener('click', function () {
      nav.classList.toggle('active');
  });

  window.addEventListener('resize', function () {
      if (window.innerWidth > 800) {
          dropdownButton.classList.remove('active');
          nav.classList.remove('active');
      }
  });
});

function idioma() {
  const dropdown = document.getElementById("language-options");
  dropdown.classList.toggle("hidden");
}

function canvi(idioma) {
  idiomaActual(idioma);
}

async function idiomaActual(idioma) {
  if (idioma === 'ca') {
    location.reload();
    return;
  } else if (idioma === 'es') {
    const response = await fetch(`/i18n/es.json`); 
    const data = await response.json();
    const paginaActual = window.location.pathname.split('/').pop().split('.')[0];
    const navLinks = document.querySelectorAll(".header a");
    const footer = document.querySelector("footer");

    navLinks[0].textContent = data.header["1"];
    navLinks[1].textContent = data.header["2"];
    navLinks[2].textContent = data.header["3"];
    navLinks[3].textContent = data.header["4"];
            
    footer.children[0].textContent = data.footer.email;
    footer.children[1].textContent = data.footer.phone;
    footer.children[2].textContent = data.footer.address;

    translate(paginaActual);
  }
}

