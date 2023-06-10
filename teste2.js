/*TESTE COM A PALAVRA HELLO*/
const meanings = 
[
    {"partOfSpeech":"noun",
    "definitions":
        [
            {"definition":"\"Hello!\" or an equivalent greeting.",
            "synonyms":[],
            "antonyms":[]
            }
        ],
    "synonyms":["greeting"],
    "antonyms":[]
    },
    {"partOfSpeech":"verb",
    "definitions":
    [
        {"definition":
        "To greet with \"hello\".",
        "synonyms":[],
        "antonyms":[]
        }
    ],
    "synonyms":[],
    "antonyms":[]
    },
    {"partOfSpeech":"interjection",
        "definitions":[
            {"definition":"A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.",
            "synonyms":[],
            "antonyms":[],
            "example":"Hello, everyone."
            },
            {"definition":"A greeting used when answering the telephone.",
            "synonyms":[],
            "antonyms":[],
            "example":"Hello? How may I help you?"
            },
            {"definition":"A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.",
            "synonyms":[],
            "antonyms":[],
            "example":"Hello? Is anyone there?"
            },
            {"definition":"Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.",
            "synonyms":[],
            "antonyms":[],
            "example":"You just tried to start your car with your cell phone. Hello?"},
            {"definition":"An expression of puzzlement or discovery.",
            "synonyms":[],
            "antonyms":[],
            "example":"Hello! What’s going on here?"}
        ],
        "synonyms":[],
        "antonyms":["bye","goodbye"]
    }
]

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
}