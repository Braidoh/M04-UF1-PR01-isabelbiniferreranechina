function servei(serveiId) { // Redirigeix a una pàgina depenent del id  
  if (serveiId === 'nosaltres') {
      window.location.href = 'nosaltres.html';
  } else {
      window.location.href = 'serveis.html';
  }
}

function desplegable() { // Mostra o amaga el desplegable
  var desplegable = document.querySelector(".desplegable");
  if (getComputedStyle(desplegable).visibility === "hidden") {
      desplegable.style.visibility = "visible";
  } else {
      desplegable.style.visibility = "hidden";
  }
}