BLACKJACK


Players: user & dealer 

Rules: 
Winning: User beats the dealers hand without going over 21. 
 Losing: Dealer gets to >= 17 before user gets to 21. 
 Losing: User goes over 21 ("bust"). 


 Cards: 
 Face cards are worth 10 (King, Queen, Jack)
 Aces are worth 1 OR 11 
 No splits, no doubles 

 App functionality: 
 1. Dealer and user start with 2 cards, 1 dealer card is a secret 
 2. User gets option to draw or stay (if draw, code must card 1 + card 2 + card 3)
 3. If user =/= 21, player has option to draw another card 
 4a. If user > 21, return "YOU LOST" msg -- option to replay game, dealer null 
 4b. After user chooses "stay" or if cards === 21, dealer turn to draw (auto draw until cards >= 17 but <= 21 (auto draw stops between 17 and 21) or until >21 (auto bust))
 5. Once user and dealer draws all necessary cards, decide who wins 
 5a. User wins if cards <= 21 and cards > dealer cards 
 5b. Dealer wins if cards between 17 and 21 and cards >= user cards 
 5c. User wins if dealer busts 
 5d. Dealer wins of use busts 

 User interface: 
 cards, win totals (user or dealer)

/*----- constants -----*/
const player; 
const dealer; 

/*----- app's state (variables) -----*/
let game; 
let draw; 
let winner; 


/*----- cached element references -----*/
const cards 
const messages 
const 

/*----- event listeners -----*/
 click on "hit" to assign a card 
 click on "stay" to end game (and others stuff)

/*----- functions -----*/
 init(); 

 function to assign cards at start of game 
 function to assign new cards 
 function to total cards in hands 
 function to swith turns 
 function to determine winner 
 function to assign random card to dealer if current total less than 17 

