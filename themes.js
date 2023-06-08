const themeButton = document.querySelector(".toggle-container")
const body = document.querySelector('body');
const container = document.querySelector('.container')
const dropdownlink = document.querySelector('.dropdownlink')
const dropdown = document.querySelector('.dropdown')
const tipoPalavra = document.querySelector('.tipo-palavra');
const itemSignificado = document.querySelector('.item-significado')
const linkSource = document.querySelector('.link-source')



themeButton.addEventListener('change', () => {
  body.classList.toggle('theme-light');
  body.classList.toggle('theme-dark');
  container.classList.toggle('theme-light');
  container.classList.toggle('theme-dark');
  dropdownlink.classList.toggle('theme-light');
  dropdownlink.classList.toggle('theme-dark');
  dropdown.classList.toggle('theme-light');
  dropdown.classList.toggle('theme-dark');
  tipoPalavra.classList.toggle('theme-light');
  tipoPalavra.classList.toggle('theme-dark');
  itemSignificado.classList.toggle('theme-light');
  itemSignificado.classList.toggle('theme-dark');
  linkSource.classList.toggle('theme-light');
  linkSource.classList.toggle('theme-dark');
});
