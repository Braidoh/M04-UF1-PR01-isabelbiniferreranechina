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

async function changeLanguage(language) {
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?language=' + language;
  window.history.replaceState({}, '', newURL);
  const response = await fetch(`./i18n/${lang}.json`);
}

function toggleLanguageDropdown() {
  const dropdown = document.getElementById("language-options");
  dropdown.classList.toggle("hidden");
}