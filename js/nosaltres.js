async function translate(paginaActual) {
    const response = await fetch(`/i18n/es.json`);
    const data = await response.json();

    const QuiSom = document.querySelectorAll("h2")[0];
    const paragraph1 = document.querySelectorAll("p")[0];
    const paragraph2 = document.querySelectorAll("p")[1];
    const paragraph3 = document.querySelectorAll("p")[2];
    const PerqueNosaltres = document.querySelectorAll("h2")[1];
    const resaltat = document.querySelector("p.resaltat"); // <p> con clase "destacado"
    
    QuiSom.textContent = data.body.nosaltres.QuiSom;
    paragraph1.textContent = data.body.nosaltres.paragraph1;
    paragraph2.textContent = data.body.nosaltres.paragraph2;
    paragraph3.textContent = data.body.nosaltres.paragraph3;
    PerqueNosaltres.textContent = data.body.nosaltres.PerqueNosaltres;
    resaltat.textContent = data.body.nosaltres.resaltat;
}