document.addEventListener('DOMContentLoaded', function () { // Quan la pàgina està carregada
  const serveis = document.querySelectorAll('.servei');
  let serveiActual = null; // Per saber quin està obert

  serveis.forEach(servei => { // Afegeix l'event listener a cada servei
    servei.addEventListener('click', function () {
      const serveiId = this.getAttribute('onclick').match(/'(\w+)'/)[1]; // Obté l'ID del servei
      toggleServei(serveiId);
    });
  });

  function toggleServei(serveiId) { // Mostra o amaga el contingut del servei
    const contingut = document.querySelector('.contingut');
    const serveiContingut = document.querySelector(`.contingut .${serveiId}`);

    if (serveiActual === serveiId) { // Si ja està seleccionat, ho oculta      
      serveiContingut.style.display = 'none';
      contingut.style.display = 'none';
      serveiActual = null;
    } else { // Mostra el contingut      
      contingut.style.display = 'block';
      document.querySelectorAll('.contingut > div').forEach(cont => cont.style.display = 'none');
      serveiContingut.style.display = 'block';
      serveiActual = serveiId;
    }
  }

  let sub1Actual = null; // Guarda el sub1 obert actual

  document.querySelectorAll('.sub1').forEach(sub1 => {
    sub1.addEventListener('click', () => {
      const nextSubBloc = sub1.nextElementSibling;
      if (nextSubBloc && nextSubBloc.classList.contains('sub-bloc')) { // Si és el mateix sub1 que estava obert, tanquem el seu sub-bloc
        if (sub1Actual === sub1) {
          nextSubBloc.classList.remove('open');
          sub1Actual = null; // Posem a null quan es tanca
        } else {          
          nextSubBloc.classList.add('open');
          sub1Actual = sub1; // Actualitzem el sub1 actual
        }
      }
    });
  });
});