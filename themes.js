const themeButton = document.querySelector(".toggle-container")
const body = document.querySelector('body');
const container = document.querySelector('.container')
const dropdownlink = document.querySelector('.dropdownlink')
const dropdown = document.querySelector('.dropdown')
const tipoPalavra = document.querySelector('.tipo-palavra');
const itemSignificado = document.querySelector('.item-significado')
const listaSignificado = document.querySelector('.lista-significados')
const linkSource = document.querySelector('.link-source')
const resultados =  document.querySelector('.resultado');



themeButton.addEventListener('change', () => {
  body.classList.toggle('theme-light');
  body.classList.toggle('theme-dark');
  container.classList.toggle('theme-light');
  container.classList.toggle('theme-dark');
  dropdownlink.classList.toggle('theme-light');
  dropdownlink.classList.toggle('theme-dark');
  dropdown.classList.toggle('theme-light');
  dropdown.classList.toggle('theme-dark');
 
  resultados.classList.toggle('theme-light');
  resultados.classList.toggle('theme-dark');
});
