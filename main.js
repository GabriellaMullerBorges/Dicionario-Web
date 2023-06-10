// Selecionar elementos HTML
const pesquisaBtn = document.querySelector("#botao-pesquisa");
const palavraInput = document.getElementById('inp-word');
const palavraDigitadaElement = document.getElementById('palavra-digitada');
const foneticaElement = document.getElementById('fonetica');
const sinonimoElement =  document.getElementById('sinonimo');
const significadoElement = document.querySelector("item-significado");
const sourceElement =  document.querySelector("link-source")
const resultado = document.querySelector('.resultado');
const palavra = document.querySelector('.palavra');

// Definir função de clique do botão de pesquisa
pesquisaBtn.addEventListener("click", () => {
    const palavraDigitada = palavraInput.value;
    pegaPalavra(palavraDigitada);
});

// Função assíncrona para obter a palavra
async function pegaPalavra(palavra) {
    try {
        var url = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`);
        var urlConvertida = await url.json();

        if (urlConvertida.erro) {
            throw Error('Não reconheço essa palavra');
        }       

        console.log(urlConvertida);
       
         mostraInfos(urlConvertida);
        

        return urlConvertida;
    } catch (erro) {
        alert(erro);
    }

function mostraInfos(array){
    
    let html = "";
    let phonetic = [];
  
    html += '<div class="palavra">';
    html += '<div class="escrita">';
    html += '<div class="palavra-digitada-div">';
    html += `<p class="palavra-digitada">${array[0].word}</p>`;
    html += '</div>';
  
    for (let i = 0; i < array[0].phonetics.length; i++) {
      if (array[0].phonetics[i].text !== undefined) {
        phonetic.push(array[0].phonetics[i].text);
      }
    }
  
    html += '<div class="fonetica-palavra">';
    html += `<p id="fonetica">${phonetic[0]}</p>`;
    html += '</div>';
  
    html += '<div class="som">';
    html += '<div class="som-palavra-btn">';
    html += '<img src="./images/icon-play.svg" class="som" alt="icone som" >';
    html += '</div>';
    html += '</div>';
  
    html += '<div class="explicacao">';
  
    for (let meaning of array[0].meanings) {
      const partOfSpeech = meaning.partOfSpeech;
      const definitions = meaning.definitions;
      const synonyms = meaning.synonyms;
      const antonyms = meaning.antonyms;
  
      html += '<div class="tipo-palavra">';
      html += `<p>${partOfSpeech}</p>`;
      html += '</div>';
  
      html += '<div class="significado">';
      html += '<p class="significado">Meaning</p>';
      html += '<ul class="lista-significados">';
  
      for (let definition of definitions) {
        html += `<li class="item-significado">${definition.definition}</li>`;
      }
  
      html += '</ul>';
      html += '</div>';
  
      if (synonyms.length > 0) {
        html += '<div class="sinonimos">';
        html += '<p>Sinônimos</p>';
        html += '<ul class="lista-sinonimos">';
    
        for (let synonym of synonyms) {
          html += `<li class="item-sinonimo">${synonym}</li>`;
        }
    
        html += '</ul>';
        html += '</div>';
      }
  
      if (antonyms.length > 0) {
        html += '<div class="antonyms sinonimos">';
        html += '<p>Antonyms</p>';
        html += '<ul class="lista-antonyms lista-sinonimos">';
    
        for (let antonym of antonyms) {
          html += `<li class="item-antonym">${antonym}</li>`;
        }
    
        html += '</ul>';
        html += '</div>';
      }
    }
  
    html += '</div>';
  
    html += '<div class="source">';
    html += '<p class="source-text">Source</p>';
    html += `<p class="link-source">${array[0].sourceUrls}</p>`;
    html += '</div>';
  
    html += '</div>';
    html += '</div>';

  resultado.innerHTML = html;
    } 
}