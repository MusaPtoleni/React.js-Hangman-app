// Array of words for the game
const african_countries = 
    [
        "mali",
        "ghana",
        "egypt",
        "algeria",
        "uganda",
        "niger",
        "madagascar",
        "cameroon",
        "mauritania",
        "tanzania",
        "seychelles"
    ];

// Making the words random
function randomWords(){
    const word =  african_countries[Math.floor(Math.random()* african_countries.length)];
    return word;
}

randomWords()

// exporting the function
export {randomWords};
