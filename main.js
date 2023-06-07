

const explicacao = document.querySelector(".explicacao");
const som =  document.querySelector(".som");
const pesquisa =  document.querySelector(".search-btn")
const resultado = document.querySelector(".resultado")

async function pegaPalavra(palavra){
    try{
        var url = await fetch (`https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`);
        var urlConvertida = await url.json();
        if(urlConvertida.erro){
            throw Error('Não reconheço essa palavra');
        }
        alert(palavra);
        console.log(urlConvertida)
        return urlConvertida
    } catch (erro) {
        alert(erro)
    }
}

pesquisa.addEventListener("click",() => {
    var digitacao = document.getElementById("inp-word")
    var palavraDigitada = digitacao.value;
    pegaPalavra(palavraDigitada);
    mostraNaTela(); /* o tempo da função está errado*/
})


function mostraNaTela(){
    alert("palavras")
/*resultado.innerHTML = `
<div class="palavra">
<div class="escrita">
    <div class="palavra-digitada-div">
        <p class="palavra-digitada">${palavraDigitada}</p>
    </div>
    <div class="fonetica-palavra">
        <p>${urlConvertida[0].phonetics[0,1,2]}</p>
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
        <p>${urlConvertida[0].meanings[0].partOfSpeech}</p>
    </div>
        <div class="significado">
            <p class="significado">Significado</p>
            <ul class="lista-significados">
                <li class="item-significado">
                ${urlConvertida[0].meanings[0].definitions[0]}
                </li>
                <li class="item-significado">
                ${urlConvertida[0].meanings[0].definitions[1]}
                </li>
                <li class="item-significado">
                ${urlConvertida[0].meanings[0].definitions[2]}
                </li>
            </ul>
        </div>
        <div class="sinonimos">
            <p>Sinônimos</p>
            <ul class="lista-sinonimos">
                <li class="item-sinonimo"> ${urlConvertida[0].meanings[0].synonyms[0]}</li>
            </ul>
        </div>
</div>
<div class="source">
    <p class="source-text">Fonte</p>
    <p class="link-source">  ${urlConvertida[0].sourceUrls[0]}</p>
</div>

`;*/

}