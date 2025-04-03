async function changeLanguage(language) {
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?language=' + language;
  window.history.replaceState({}, '', newURL);
  const response = await fetch(`./i18n/${lang}.json`);
}

function toggleLanguageDropdown() {
  const dropdown = document.getElementById("language-options");
  dropdown.classList.toggle("hidden");
}