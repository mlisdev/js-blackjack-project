
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
let score; 


/*----- cached element references -----*/
const playerContainer = document.getElementById('player-deck-container');
const dealerContainer = document.getElementById('dealer-deck-container');
const tempDeck = [...masterDeck];
let playerHand = [];
let dealerHand = []; 
const dealerScore = document.getElementById('dealer-score'); 
const playerScore = document.getElementById('player-score'); 
const winMsg = document.getElementById('results'); 

/*----- event listeners -----*/
// click on "hit" to assign a card
document.getElementById('hit').addEventListener('click', hitPlayerDeck); 
//click "stay" to end game" 
document.getElementById('stay').addEventListener('click', playerStayed); 
// restart game 
document.getElementById('play-again').addEventListener('click', init); 


/*----- functions -----*/

//builds masterDeck for game, used in tempDeck and for shuffledDeck 
// previously provided JClark code 
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
}; 

// renders cards on DOM -- previously provided JClark code 
function renderDeckInContainer(deck, container) {
    container.innerHTML = '';
    const cardsHtml = deck.reduce(function (html, card) {
        return html + `<div class="card ${card.face}"></div>`;
    }, '');
    container.innerHTML = cardsHtml;
}; 


// creates random index and temp deck for game 
// pushes 2 random cards into playerHand array from temp deck  
// displays cards on DOM
function getPlayerCards() { 
    for (i = 0; i < 2; i++) {
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        //console.log(rndIdx); 
        playerHand.push(tempDeck.splice(rndIdx,1)[0]);
    }
    renderDeckInContainer(playerHand, playerContainer);
    sum = doThePlayerMath(); 
    playerScore.innerHTML = `player has: ${doThePlayerMath()}`;
};


// pushes 2 random cards into dealerHand array from same temp deck as playerHand
// displays cards on DOM
function getDealerCards() { 
    for (i = 0; i < 2; i++) {
        const rndIdx = Math.floor(Math.random() * tempDeck.length);
        dealerHand.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    renderDeckInContainer(dealerHand, dealerContainer);
    dealerScore.innerHTML = `dealer has: ${doTheDealerMath()}`;
};

// when player hits "hit me!" button, function adds new card to playerHand array and displays on DOM 

function hitPlayerDeck(){ 
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    playerHand.push(tempDeck.splice(rndIdx, 1)[0]);
    renderDeckInContainer(playerHand, playerContainer);
    // sums up cards in playerHand array 
    sum = doThePlayerMath();
    playerScore.innerHTML = `player now has: ${sum}`;
    if (playerScore > 21){ 
        return `you lose!`
    }
    };

// loops over playerHand array and sums up cards in hand 
function doThePlayerMath ()
{
    sum = 0;
    for (i = 0; i < playerHand.length; i++)
    {
        sum += playerHand[i].value;
    }
    return sum;
};

// loops over dealerHand array and sums up cards in hand 
function doTheDealerMath() {
    sum = 0;
    for (i = 0; i < dealerHand.length; i++) {
        sum += dealerHand[i].value;
    }
    return sum;
};

// function hitDealerCard(){ 

// }; 

function playerStayed(){ 
    // check if computer busts 
    // check if player won 
}

// new function, restartGame, clear out results 
// clear out container, clear out array 
// clear out master deck 

// initializes board 
function init() { 
    console.log("hello"); 
    getPlayerCards();
    getDealerCards(); 
}; 

// runs initial code on DOM 
init(); 

