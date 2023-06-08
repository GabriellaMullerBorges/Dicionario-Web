// Selecionar elementos HTML
const pesquisaBtn = document.querySelector("#botao-pesquisa");
const palavraInput = document.getElementById('inp-word');
const palavraDigitadaElement = document.getElementById('palavra-digitada');
const foneticaElement = document.getElementById('fonetica');
const sinonimoElement =  document.getElementById('sinonimo');
const significadoElement = document.querySelector("item-significado");
const sourceElement =  document.querySelector("link-source")
const resultado = document.querySelector('.resultado');

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
        palavraDigitadaElement.textContent = palavra;
        teste(urlConvertida);
        

        return urlConvertida;
    } catch (erro) {
        alert(erro);
    }
}

function teste(array){
    resultado.innerHTML =  `<div class="palavra">
    <div class="escrita">
        <div class="palavra-digitada-div">
            <p class="palavra-digitada" id="palavra-digitada"></p>
        </div>
        <div class="fonetica-palavra">
            <p id="fonetica">${array[0].phonetic}</p>
        </div>
    </div>
    <div class="som">
        <div class="som-palavra-btn">
            <img src="./images/icon-play.svg" class="som" alt="icone som" >
        </div>
    </div>
</div>


    <div class="explicacao">
        <div class="tipo-palavra">
            <p>${array[0].meanings[0].partOfSpeech}</p>
        </div>
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