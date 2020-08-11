
// provided card js 
/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

// build master deck of cards - provided 
const masterDeck = buildMasterDeck();
//renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
let firstPlayerCards = [];  
let firstDealerCards = []; 
let shuffledDeck; 

/*----- cached element references -----*/
// const cards; 
// const messages;  
const shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
// click on "hit" to assign a card
document.getElementById('hit').addEventListener('click', hitPlayerDeck); 
// document.getElementById('stay').addEventListener('click', getWin); 
// document.querySelector('button').addEventListener('click', renderShuffledDeck);

// click on "stay" to end game(and other stuff)

/*----- functions -----*/

function getPlayerCards() { 
    const tempDeck = [...masterDeck];
    shuffledDeck = [];
    while (tempDeck.length > 50) {
        // Get a random index for a card still in the tempDeck
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        //console.log(rndIdx); 
        // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
        shuffledDeck.push(tempDeck.splice(rndIdx,1)[0]);
    }
    //console.log(tempDeck.length); 
    renderDeckInContainer(shuffledDeck, shuffledContainer);
};

getPlayerCards(); 

function hitPlayerDeck(){ 
    console.log("hey girl hey"); 
};

// function to determine winner
// function getWin() { 

// }

// init();



// function to assign random card to dealer if current total less than 17 

// provided deck code 
// function renderShuffledDeck() {
//     // Create a copy of the masterDeck (leave masterDeck untouched!)
//     const tempDeck = [...masterDeck];
//     shuffledDeck = [];
//     while (tempDeck.length) {
//         // Get a random index for a card still in the tempDeck
//         const rndIdx = Math.floor(Math.random() * tempDeck.length);
//         // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
//         shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
//     }
//     renderDeckInContainer(shuffledDeck, shuffledContainer);
// }

function renderDeckInContainer(deck, container) {
    container.innerHTML = '';
    // Let's build the cards as a string of HTML
    // Use reduce when you want to 'reduce' the array into a single thing - in this case a string of HTML markup 
    const cardsHtml = deck.reduce(function (html, card) {
        return html + `<div class="card ${card.face}"></div>`;
    }, '');
    container.innerHTML = cardsHtml;
}

function buildMasterDeck() {
    const deck = [];
    // Use nested forEach to generate card objects
    suits.forEach(function (suit) {
        ranks.forEach(function (rank) {
            deck.push({
                // The 'face' property maps to the library's CSS classes for cards
                face: `${suit}${rank}`,
                // Setting the 'value' property for game of blackjack, not war
                value: Number(rank) || (rank === 'A' ? 11 : 10)
            });
        });
    });
    return deck;
}

//renderShuffledDeck();