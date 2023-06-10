/*TESTE COM A PALAVRA WISE*/
let meanings =
[
    {"partOfSpeech":"verb",
     "definitions":
         [{"definition":"To become wise."},
           {"definition":"Usually with \"up\", to     inform or learn.",}]
               ,"synonyms":[],
                 "antonyms":[]
                },

    {"partOfSpeech":"adjective",
        "definitions":
        [{"definition":"Showing good judgement or the benefit of experience."},
        {"definition":"Disrespectful."},
        {"definition":"Aware,informed."}],
        "synonyms":[],
        "antonyms":["foolish","unwise"]}
]

/*
console.log(meanings.length)

console.log(" ")

for (let i = 0; i < meanings.length; i++) {
    console.log("array 1)")
    console.log(meanings[i].partOfSpeech)
}

console.log(" ")

console.log("Fora dos arrays")
console.log(meanings[0].definitions[0].definition)

console.log(" ")

for (let i = 0; i < meanings.length; i++) {
    console.log("array 2)")
    for (let j = 0; j < meanings[i].definitions.length; j++) {
     console.log(meanings[i].definitions[j].definition)
   }
}*/

function mostraExplicacao(){
    for (let i = 0; i < meanings.length; i++) { 
       console.log(meanings[i].partOfSpeech)
    }
}

mostraExplicacao()

function mostraExplicacao2() {
    const partOfSpeechArray = [];
  
    for (let i = 0; i < meanings.length; i++) {
      partOfSpeechArray.push(meanings[i].partOfSpeech);
    }
  
    return partOfSpeechArray;
  }
  
  console.log(mostraExplicacao2());

  function divPalavra(array){
    palavra.innerHTML =`<div class="palavra">
    <div class="escrita">
        <div class="palavra-digitada-div">
            <p class="palavra-digitada" id="palavra-digitada">
            ${array[0].word}
            </p>
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
   }`
   }