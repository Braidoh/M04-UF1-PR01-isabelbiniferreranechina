document.addEventListener('DOMContentLoaded', function () { 
  let serveiActual = localStorage.getItem('serveiActual') || null; 
  const serveis = document.querySelectorAll('.servei');

  serveis.forEach(servei => {
    servei.addEventListener('click', function () {
      const serveiId = this.getAttribute('onclick').match(/'(\w+)'/)[1];
      toggleServei(serveiId);
    });
  });

  function toggleServei(serveiId) {
    const contingut = document.querySelector('.contingut');
    const serveiContingut = document.querySelector(`.contingut .${serveiId}`);

    if (serveiActual === serveiId) {
      serveiContingut.style.display = 'none';
      contingut.style.display = 'none';
      serveiActual = null;
      localStorage.removeItem('serveiActual');
    } else {
      contingut.style.display = 'block';
      document.querySelectorAll('.contingut > div').forEach(cont => cont.style.display = 'none');
      serveiContingut.style.display = 'block';
      serveiActual = serveiId;
      localStorage.setItem('serveiActual', serveiId);
    }
  }
  
  if (serveiActual) { // Restaura l'estat anterior
    toggleServei(serveiActual);
  }

  let sub1Actual = null;
  document.querySelectorAll('.sub1').forEach(sub1 => {
    sub1.addEventListener('click', () => {
      const nextSubBloc = sub1.nextElementSibling;
      if (nextSubBloc && nextSubBloc.classList.contains('sub-bloc')) {
        if (sub1Actual === sub1) {
          nextSubBloc.classList.remove('open');
          sub1Actual = null;
        } else {
          nextSubBloc.classList.add('open');
          sub1Actual = sub1;
        }
      }
    });
  });
});