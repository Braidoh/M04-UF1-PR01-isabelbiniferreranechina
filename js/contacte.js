async function translate(paginaActual) {
    const response = await fetch(`/i18n/es.json`);
    const data = await response.json();

    const QuiSom = document.querySelectorAll("h2")[0];
    const paragraph1 = document.querySelectorAll("p")[0];
    const paragraph2 = document.querySelectorAll("p")[1];
    const paragraph3 = document.querySelectorAll("p")[2];

}