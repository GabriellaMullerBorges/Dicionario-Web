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
       
        teste(urlConvertida);
        

        return urlConvertida;
    } catch (erro) {
        alert(erro);
    }
}

function mostraExplicacao2(array) {
    const partOfSpeechArray = [];
  
        for (let i = 0; i < array[0].meanings.length; i++) {
        partOfSpeechArray.push(array[0].meanings[i].partOfSpeech);
        /*return `<div class="explicacao">
        <div class="tipo-palavra">
        <p>
            ${partOfSpeechArray[i]}
            </p>
        </div>`*/

        }
  
    return partOfSpeechArray;
 }

function teste(array){
    resultado.innerHTML =  `

        ${mostraExplicacao2(array)[1]}

                <div class="significado">
                <p class="significado">Significado</p>
                <ul class="lista-significados">
                    <li class="item-significado">
                    ${array[0].meanings[0].definitions[0].definition}
                    </li>
                </ul>
            </div>
            <div class="sinonimos">
                <p>Examples</p>
                <ul class="lista-sinonimos">
                    <li class="item-sinonimo"> 
                        <p id="sinonimo">${array[0].meanings[0].definitions[1].example}</p>
                    </li>
                </ul>
            </div>
    </div>

    <div class="source">
        <p class="source-text">Source</p>
        <p class="link-source">${array[0].sourceUrls}</p>
    </div>`
}


/*let audio = Array()

const audioFile = document.querySelector('.som').addEventListener('click', () => {
    let playAudio = new Audio(`${audio[0]}`)
    playAudio.play()
  })

  function populaAudio(data) {
    for(let i = 0; i < data[0].phonetics.length; i++) {
      if(data[0].phonetics[i].audio !== '') {
        audio.push(data[0].phonetics[i].audio)
      }
    }
  }*/