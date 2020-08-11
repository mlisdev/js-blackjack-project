
// provided card js 
/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

// build master deck of cards - provided 
const masterDeck = buildMasterDeck();
//renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
let shuffledDeck; 
let winner; 
let turn; 


/*----- cached element references -----*/
const playerContainer = document.getElementById('player-deck-container');
const dealerContainer = document.getElementById('dealer-deck-container');
const tempDeck = [...masterDeck];
let playerHand = [];
let dealerHand = []; 

/*----- event listeners -----*/
// click on "hit" to assign a card
document.getElementById('hit').addEventListener('click', hitPlayerDeck); 
// document.getElementById('stay').addEventListener('click', getWin); 
// document.querySelector('button').addEventListener('click', renderShuffledDeck);

// click on "stay" to end game(and other stuff)

/*----- functions -----*/

function getPlayerCards() { 
    for (i = 0; i < 2; i++) {
        // Get a random index for a card still in the tempDeck
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        //console.log(rndIdx); 
        // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
        playerHand.push(tempDeck.splice(rndIdx,1)[0]);
    }
    //console.log(tempDeck.length); 
    renderDeckInContainer(playerHand, playerContainer);
};


function getDealerCards() { 
    //while (tempDeck.length > 48) 
    for (i = 0; i < 2; i++) {
        // Get a random index for a card still in the tempDeck
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        //console.log(rndIdx); 
        // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
        dealerHand.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    //console.log(tempDeck.length); 
    renderDeckInContainer(dealerHand, dealerContainer);

};


function hitPlayerDeck(){ 
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    playerHand.push(tempDeck.splice(rndIdx, 1)[0]);
    renderDeckInContainer(playerHand, playerContainer);
};

// var getGameTotal = playerHand.reduce(function(a, b){ 
//     a.sum += b.score; 
//     return a; 
// })

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

function init() { 
    console.log("hello"); 
    getPlayerCards();
    getDealerCards(); 
}; 

init(); 