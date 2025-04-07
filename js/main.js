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

async function translate(paginaActual) {
  const response = await fetch(`/i18n/es.json`);
  const data = await response.json();

  if (paginaActual === "index") { /* Inici */
    
    const inici1 = document.querySelectorAll("h2")[0]; /* Secció Serveis */
    const inici2 = document.querySelectorAll("p")[0];    
    const inici3 = document.querySelectorAll("h2")[1];
    const inici4 = document.querySelectorAll("p")[1];
    const inici5 = document.querySelectorAll("h2")[2];
    const inici6 = document.querySelectorAll("p")[2];
    const inici7 = document.querySelectorAll("h2")[3];
    const inici8 = document.querySelectorAll("p")[3];    
    const inici9 = document.querySelectorAll("p")[4]; /* Secció Dades */
    const inici10 = document.querySelectorAll("p")[5];
    const inici11 = document.querySelectorAll("p")[6];
    const inici12 = document.querySelectorAll("p")[7];
    const inici13 = document.querySelectorAll("p")[8];
    const inici14 = document.querySelectorAll("p")[9];
    const inici15 = document.querySelectorAll("p")[10];
    const inici16 = document.querySelectorAll("p")[11];    
    const inici17 = document.querySelector("h3"); /* Secció Anunci */
    const inici18 = document.querySelector(".button");
    const inici19 = document.querySelector(".desplegable p:nth-child(1)");
    const inici20 = document.querySelector(".desplegable p:nth-child(2)");
    const inici21 = document.querySelector(".desplegable p:nth-child(3)");
    const inici22 = document.querySelector(".desplegable p:nth-child(4)");
    const inici23 = document.querySelector(".app-text p"); /* Secció Info */
    const inici24 = document.querySelectorAll(".app-text p:nth-child(n+2)")[0];
    const inici25 = document.querySelectorAll(".app-text p:nth-child(n+2)")[1];
    const inici26 = document.querySelectorAll(".app-text p:nth-child(n+2)")[2];
    const inici27 = document.querySelectorAll(".app-text p:nth-child(n+2)")[3];
    const inici28 = document.querySelector(".sinistres h2");
    const inici29 = document.querySelectorAll(".sinistres .button")[0];
    const inici30 = document.querySelectorAll(".sinistres .button")[1];

    inici1.textContent = data.body.index.inici1;
    inici2.textContent = data.body.index.inici2;
    inici3.textContent = data.body.index.inici3;
    inici4.textContent = data.body.index.inici4;
    inici5.textContent = data.body.index.inici5;
    inici6.textContent = data.body.index.inici6;
    inici7.textContent = data.body.index.inici7;
    inici8.textContent = data.body.index.inici8;
    inici9.textContent = data.body.index.inici9;
    inici10.textContent = data.body.index.inici10;
    inici11.textContent = data.body.index.inici11;
    inici12.textContent = data.body.index.inici12;
    inici13.textContent = data.body.index.inici13;
    inici14.textContent = data.body.index.inici14;
    inici15.textContent = data.body.index.inici15;
    inici16.textContent = data.body.index.inici16;
    inici17.textContent = data.body.index.inici17;
    inici18.textContent = data.body.index.inici18;
    inici19.textContent = data.body.index.inici19;
    inici20.textContent = data.body.index.inici20;
    inici21.textContent = data.body.index.inici21;
    inici22.textContent = data.body.index.inici22;
    inici23.textContent = data.body.index.inici23;
    inici24.textContent = data.body.index.inici24;
    inici25.textContent = data.body.index.inici25;
    inici26.textContent = data.body.index.inici26;
    inici27.textContent = data.body.index.inici27;
    inici28.textContent = data.body.index.inici28;
    inici29.textContent = data.body.index.inici29;
    inici30.textContent = data.body.index.inici30;
  } else if (paginaActual === "nosaltres") {  /* Nosaltres */  
    const nosaltres1 = document.querySelectorAll("h2")[0];
    const nosaltres2 = document.querySelectorAll("p")[0];
    const nosaltres3 = document.querySelectorAll("p")[1];
    const nosaltres4 = document.querySelectorAll("p")[2];
    const nosaltres5 = document.querySelectorAll("h2")[1];
    const nosaltres6 = document.querySelector("p.resaltat");
    
    nosaltres1.textContent = data.body.nosaltres.nosaltres1;
    nosaltres2.textContent = data.body.nosaltres.nosaltres2;
    nosaltres3.textContent = data.body.nosaltres.nosaltres3;
    nosaltres4.textContent = data.body.nosaltres.nosaltres4;
    nosaltres5.textContent = data.body.nosaltres.nosaltres5;
    nosaltres6.textContent = data.body.nosaltres.nosaltres6;  
  } else if (paginaActual === "serveis") { /* Serveis */
    const serveis1 = document.querySelectorAll("h2")[0];
    const serveis2 = document.querySelectorAll("p")[0];
    const serveis3 = document.querySelectorAll("h2")[1];
    const serveis4 = document.querySelectorAll("p")[1];
    const serveis5 = document.querySelectorAll("h2")[2];
    const serveis6 = document.querySelectorAll("p")[2];
    const serveis7 = document.querySelectorAll("h2")[3];
    const serveis8 = document.querySelectorAll(".salut button")[0];
    const serveis9 = document.querySelectorAll(".salut button")[1];
    const serveis10 = document.querySelectorAll(".llar button")[0];
    const serveis11 = document.querySelectorAll(".llar button")[1];
    const serveis12 = document.querySelectorAll(".llar button")[2];
    const serveis13 = document.querySelectorAll(".vehicles button")[0];
    const serveis14 = document.querySelectorAll(".vehicles button")[1];
    const serveis15 = document.querySelectorAll(".vehicles button")[2];  
        
    serveis1.textContent = data.body.serveis.serveis1;
    serveis2.textContent = data.body.serveis.serveis2;
    serveis3.textContent = data.body.serveis.serveis3;
    serveis4.textContent = data.body.serveis.serveis4;
    serveis5.textContent = data.body.serveis.serveis5;
    serveis6.textContent = data.body.serveis.serveis6;
    serveis7.textContent = data.body.serveis.serveis7;
    serveis8.textContent = data.body.serveis.serveis8;
    serveis9.textContent = data.body.serveis.serveis9;
    serveis10.textContent = data.body.serveis.serveis10;
    serveis11.textContent = data.body.serveis.serveis11;
    serveis12.textContent = data.body.serveis.serveis12;
    serveis13.textContent = data.body.serveis.serveis13;
    serveis14.textContent = data.body.serveis.serveis14;
    serveis15.textContent = data.body.serveis.serveis15;
  } else if (paginaActual === "contacte") { /* Contacte */
    const contacte1 = document.querySelectorAll("p")[0];
    const contacte2 = document.querySelectorAll("p")[1];
    const contacte3 = document.querySelectorAll("p")[2];
    const contacte4 = document.querySelectorAll("p")[3];

    contacte1.textContent = data.body.contacte.contacte1;
    contacte2.textContent = data.body.contacte.contacte2;
    contacte3.textContent = data.body.contacte.contacte3;
    contacte4.textContent = data.body.contacte.contacte4;
  } else if (paginaActual === "area") { /* Area Privada */
    const area1 = document.querySelector("label[for='dni']"); // DNI
    const area2 = document.querySelector("label[for='password']"); // Contraseña
    const area3 = document.querySelector("#primer button"); // Acceder
    const area4 = document.querySelector(".button-container .button:nth-child(1)"); // Declarar siniestro
    const area5 = document.querySelector("#segon h3"); // DECLARAR SINIESTRO
    const area6 = document.querySelector("label[for='polissa']"); // Número de póliza
    const area7 = document.querySelector("label[for='data']"); // Fecha y hora del siniestro
    const area8 = document.querySelector("label[for='lloc']"); // Lugar del siniestro
    const area9 = document.querySelector("label[for='tipus']"); // Tipo de siniestro
    const area10 = document.querySelector("label[for='descripcio']"); // Descripción del siniestro
    const area11 = document.querySelector("#segon button[type='submit']"); // Enviar
    const area12 = document.querySelector(".button-container .button:nth-child(3)"); // Consultar siniestro
    const area13 = document.querySelector(".consultar p:nth-child(1)"); // Referencia #711
    const area14 = document.querySelector(".consultar p:nth-child(3)"); // Estado actual
    const area15 = document.querySelector(".consultar ul li:nth-child(1)"); // Apertura ✅
    const area16 = document.querySelector(".consultar ul li:nth-child(2)"); // Asignación de gestor ✅
    const area17 = document.querySelector(".consultar ul li:nth-child(3)"); // Contacto
    const area18 = document.querySelector(".consultar ul li:nth-child(4)"); // Tancamiento
    const area19 = document.querySelector(".button-container .button:nth-child(5)"); // Otras consultas
    const area20 = document.querySelector(".altres p"); // Descripción de otras consultas

    area1.textContent = data.body.area.area1;
    area2.textContent = data.body.area.area2;
    area3.textContent = data.body.area.area3;
    area4.textContent = data.body.area.area4;
    area5.textContent = data.body.area.area5;
    area6.textContent = data.body.area.area6;
    area7.textContent = data.body.area.area7;
    area8.textContent = data.body.area.area8;
    area9.textContent = data.body.area.area9;
    area10.textContent = data.body.area.area10;
    area11.textContent = data.body.area.area11;
    area12.textContent = data.body.area.area12;
    area13.textContent = data.body.area.area13;
    area14.textContent = data.body.area.area14;
    area15.textContent = data.body.area.area15;
    area16.textContent = data.body.area.area16;
    area17.textContent = data.body.area.area17;
    area18.textContent = data.body.area.area18;
    area19.textContent = data.body.area.area19;
    area20.textContent = data.body.area.area20;
  }
}

